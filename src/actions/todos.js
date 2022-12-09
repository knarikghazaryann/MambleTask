import * as api from '../api/todosApi';


export const getToDo = async() => {
    const res = await api.fetchToDo();
    const data = await res.json();
    return data;
}

export const getSettings = async() => {
    const res = await api.fetchSettings();
    const data = await res.json();
    return data;
}