import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config, postDataAPI, getDataAPI } from "../../utils/axiosConfig";

// axios.defaults.withCredentials = true;

const register = async (userData) => {
    const response = await axios.post(`${base_url}user/register`, userData);
    if (response.data) {
        return response.data;
    }
}

const login = async (user) => {
    // Gọi hàm login
    const response = await postDataAPI(`user/login`, user, config);
    // debugger;
    // Nếu phản hồi thành công
    if (response.data) {
        // Lưu thông tin người dùng vào local storage
        localStorage.setItem('user', JSON.stringify(response.data));
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
    }
    return response.data;
};

const refreshToken = async () => {
    const firstLogin = localStorage.getItem("user");
    if (firstLogin) {
        const response = await getDataAPI(`user/refresh`, { withCredentials: true });
        if (response.data) {
            // Lưu thông tin người dùng vào local storage
            localStorage.setItem('user', JSON.stringify(response.data));
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
        }
        return response.data;
    }
};



const logout = async () => {
    const response = await axios.get(`${base_url}user/logout`);
    if (response.data) {
        localStorage.removeItem("user");
        console.log(1);
    }
    return response.data;
};

const forgotPasswordToken = async (email) => {
    console.log(email);
    const response = await axios.post(`${base_url}user/forgot-password-token`, email);
    return response.data;
};

const resetPassword = async (token, password) => {
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

const getUserCart = async () => {
    const response = await axios.get(`${base_url}user/cart`, config);
    return response.data;
};

const deleteProductfromCart = async (id) => {
    const response = await axios.delete(`${base_url}user/cart/${id}`, config);
    return response.data;
};

<<<<<<< HEAD
const updateProductFromCart = async (values) => {
    console.log(values);
    const response = await axios.put(`${base_url}user/cart/${values.id}`, values, config);
    return response.data;
};

=======
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
const getWishList = async () => {
    const response = await axios.get(`${base_url}user/wishlist`, config);
    return response.data;
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
const applyCoupon = async (coupon) => {
    const response = await axios.post(`${base_url}user/cart/applycoupon`, coupon, config);
    return response.data;
};

const createOrder = async (values) => {
    const response = await axios.post(`${base_url}user/cart/cash-order`, values, config);
    return response.data;
};

const getOrdersByUser = async () => {
    const response = await axios.get(`${base_url}user/get-orders`, config);
    return response.data;
};

const getDetailOrderByUserId = async (id) => {
    const response = await axios.get(`${base_url}user/getorderbyuser/${id}`, config);
    return response.data;
};




<<<<<<< HEAD
export const userService = { register, login, refreshToken, logout, forgotPasswordToken, resetPassword, changePassword, getUserInfo, updateUser, addToCart, getUserCart, deleteProductfromCart, getWishList, applyCoupon, createOrder, getDetailOrderByUserId, getOrdersByUser, updateProductFromCart }
=======
<<<<<<< HEAD
export const userService = { register, login, refreshToken, logout, forgotPasswordToken, resetPassword, changePassword, getUserInfo, updateUser, addToCart, getUserCart, deleteProductfromCart, getWishList, applyCoupon, createOrder, getDetailOrderByUserId, getOrdersByUser }
=======
export const userService = { register, login, refreshToken, logout, forgotPasswordToken, resetPassword, changePassword, getUserInfo, updateUser, addToCart, getUserCart, deleteProductfromCart, getWishList, applyCoupon, createOrder, getDetailOrderByUserId, getOrdersByUser }
=======
export const userService = { register, login, refreshToken, logout, forgotPasswordToken, resetPassword, changePassword, getUserInfo, updateUser, addToCart, getUserCart, deleteProductfromCart, getWishList }
>>>>>>> 9f19b3122122231ef1eb29c6a78e4f9dede688e6
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
