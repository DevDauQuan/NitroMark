import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";


const register = async (userData) => {
    const response = await axios.post(`${base_url}user/register`, userData);
    if (response.data) {
        return response.data;
    }
}

const login = async (user) => {
    const response = await axios.post(`${base_url}user/login`, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};


const logout = async () => {
    const response = await axios.get(`${base_url}user/logout`);
    if (response.data) {
        localStorage.removeItem("user");
    }
    return response.data;
};

const forgotPasswordToken = async (email) => {
    console.log(email);
    const response = await axios.post(`${base_url}user/forgot-password-token`, email);
    return response.data;
};

const resetPassword = async (token, password) => {
    console.log(password);
    const response = await axios.put(`${base_url}user/reset-password/${token}`, password);
    return response.data;
};

const changePassword = async (userData) => {
    const response = await axios.put(`${base_url}user/password`, userData, config);
    return response.data;
};

const getUserInfo = async (id) => {
    const response = await axios.get(`${base_url}user/${id}`, config);
    return response.data;
};

const updateUser = async (values) => {
    console.log(values);
    const response = await axios.put(`${base_url}user/edit-user/${values.id}`, values, config);
    return response.data;
};


const addToCart = async (values) => {
    console.log(values);
    const response = await axios.post(`${base_url}user/cart`, values, config);
    return response.data;
};

const getUserCart = async (values) => {
    const response = await axios.get(`${base_url}user/cart`, config);
    return response.data;
};

export const userService = { register, login, logout, forgotPasswordToken, resetPassword, changePassword, getUserInfo, updateUser, addToCart, getUserCart }