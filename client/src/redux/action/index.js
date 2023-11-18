import axios from "axios";
import { AddNewToDo, GETALLToDo, TOGGLEToDo, UPDATEToDo } from "./type";
const API_URL = "http://localhost:8000";
export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    dispatch({ type: AddNewToDo, payload: res.data });
  } catch (error) {
    console.log("error while adding todo in database", error.message);
  }
};
export const getAllTodo = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    dispatch({ type: GETALLToDo, payload: res.data });
  } catch (error) {
    console.log("error while fetching todo from database", error.message);
  }
};
export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);
    dispatch({ type: TOGGLEToDo, payload: res.data });
  } catch (error) {
    console.log("error while fetching todo from database", error.message);
  }
};
export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`, { data });
    dispatch({ type: UPDATEToDo, payload: res.data });
  } catch (error) {
    console.log("error while fetching todo from database", error.message);
  }
};
