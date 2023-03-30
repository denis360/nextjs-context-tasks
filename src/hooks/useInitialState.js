"use client"
import { useLocalStorage } from "./useLocalStorage";

const initialState = {
  tasks: []
};

const useInitialState = () => {
  const [state, setState] = useLocalStorage("tasks", initialState);

  const addTask = (payload) => {
    setState({
      ...state,
      tasks: [...state.tasks, payload]
    })
  }

  const deleteTask = (id) => {
    setState({
      ...state,
      tasks: state.tasks.filter(task => task.id != id)
    })
  }

  const updateTask = (id, payload) => {
    setState({
      ...state,
      tasks: state.tasks.map(task => task.id == id ? {
        ...task,
        ...payload
      } : task)
    })
  }

  return {
    state,
    addTask,
    deleteTask,
    updateTask
  }
}

export default useInitialState;
