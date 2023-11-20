import axios from "axios";
import {
  AddNewToDo,
  DELETEToDo,
  GETALLToDo,
  LOGIN_USER,
  SIGNUP_USER,
  TOGGLETabs,
  TOGGLEToDo,
  UPDATEToDo,
} from "./type";
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
    console.log("error while toggling todo from database", error.message);
  }
};
export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`, { data });
    dispatch({ type: UPDATEToDo, payload: res.data });
  } catch (error) {
    console.log("error while editing todo from database", error.message);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);
    dispatch({ type: DELETEToDo, payload: res.data });
  } catch (error) {
    console.log("error while deleting todo from database", error.message);
  }
};
export const toggleTabs = (tab) => async (dispatch) => {
  try {
    dispatch({ type: TOGGLETabs, selected: tab });
  } catch (error) {
    console.log("error while toggling tabs", error.message);
  }
};
export const signup = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/signup`, data);
    dispatch({ type: SIGNUP_USER, payload: res.data });
  } catch (error) {
    console.log("error while sign up", error.message);
  }
};
export const login = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/login`, data);
    dispatch({
      type: LOGIN_USER,
      payload: { token: res.data },
    });
    localStorage.setItem("token", res.data);
    return res.data;
  } catch (error) {
    console.log("error while login", error.message);
    return error;
  }
};
