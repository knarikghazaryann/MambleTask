import React, { Fragment, useState } from 'react';
import "./PopUp.css"

const PopUp = ({ todo, dispatch }) => {

    const [popupWindow, setPopupWindow] = useState(false);

    const showPupupedWIndow = () => {
        setPopupWindow((prev) => {
            return prev = !prev
        })

    };

    if (popupWindow) {
        document.body.classList.add("active-popupWindow")
    } else {
        document.body.classList.remove("active-popupWindow");
    }

    const deleteTodoHandler = async (e) => {
        e.stopPropagation();

        const res = await fetch(`http://localhost:5000/todos/${todo.id}`, {
            method: 'DELETE'
        });

        const data = await res.json();
        dispatch({ type: 'deleteToDo', payload: { id: todo.id } })
        return data;
    }

    return (
        <Fragment>
            <button type='button' onClick={showPupupedWIndow} className='deleteButton'>
                <img src='/deleteIcon.svg' alt='deleteIcon' />
            </button>
            {popupWindow && (
                <div className='popupWindow'>
                    <div className='overlay' onClick={showPupupedWIndow}></div>
                    <div className='popupWindow-content'>
                        <p> Are you sure you want to delete? </p>
                        <div className='confirmation-buttons-block'>
                            <button type='button' onClick={deleteTodoHandler}>Yes</button>
                            <button type='button' onClick={showPupupedWIndow}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default PopUp;