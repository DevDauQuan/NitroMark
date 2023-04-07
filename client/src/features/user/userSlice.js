import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { userService } from "./userService";

const getUserfromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const initialState = {
    user: getUserfromLocalStorage || "",
    orders: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const registerUser = createAsyncThunk("auth/register", async (userData, thunkAPi) => {
    try {
        return await userService.register(userData);
    } catch (error) {
        return thunkAPi.rejectWithValue(error);
    }
})

export const loginUser = createAsyncThunk("auth/login", async (userData, thunkAPi) => {
    try {
        return await userService.login(userData);
    } catch (error) {
        return thunkAPi.rejectWithValue(error);
    }
})

export const refreshToken = createAsyncThunk("auth/refreshtoken", async (_, thunkAPi) => {
    try {
        return await userService.refreshToken();
    } catch (error) {
        return thunkAPi.rejectWithValue(error);
    }
})

<<<<<<< HEAD
export const logoutUser = createAsyncThunk("auth/logout", async (_, thunkAPi) => {
=======
<<<<<<< HEAD
export const logoutUser = createAsyncThunk("auth/logout", async (_, thunkAPi) => {
=======
export const logoutUser = createAsyncThunk("auth/logout", async (thunkAPi) => {
>>>>>>> 9f19b3122122231ef1eb29c6a78e4f9dede688e6
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
    try {
        return await userService.logout();
    } catch (error) {
        return thunkAPi.rejectWithValue(error);
    }
})

export const getUser = createAsyncThunk("auth/getuser", async (id, thunkAPi) => {
    try {
        return await userService.getUserInfo(id);
    } catch (error) {
        return thunkAPi.rejectWithValue(error);
    }
})

export const forgotPasswordTokenUser = createAsyncThunk("auth/forgot-password-token", async (email, thunkAPi) => {
    try {
        console.log(email);
        return await userService.forgotPasswordToken(email);
    } catch (error) {
        return thunkAPi.rejectWithValue(error);
    }
})

export const resetPasswordUser = createAsyncThunk("auth/reset-password", async (userData, thunkAPi) => {
    try {
        console.log(userData);
        return await userService.resetPassword(userData.token, userData);
    } catch (error) {
        return thunkAPi.rejectWithValue(error);
    }
})

export const ChangePasswordUser = createAsyncThunk("auth/change-password", async (userData, thunkAPi) => {
    try {
        return await userService.changePassword(userData);
    } catch (error) {
        return thunkAPi.rejectWithValue(error);
    }
})

export const updateAUser = createAsyncThunk("user/update-user", async (values, thunkAPI) => {
    try {
        console.log(values);
        return await userService.updateUser(values);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}
);

export const addtoCart = createAsyncThunk("user/cart", async (values, thunkAPI) => {
    try {
        return await userService.addToCart(values);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}
);

export const getaUserCart = createAsyncThunk("user/get-cart", async (_, thunkAPI) => {
    try {
        return await userService.getUserCart();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}
);

export const deleteProductfromCart = createAsyncThunk("user/delete-product-cart", async (id, thunkAPI) => {
    try {
        return await userService.deleteProductfromCart(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}
);

<<<<<<< HEAD
export const getWishList = createAsyncThunk("user/get-wishlist", async (_, thunkAPI) => {
=======
<<<<<<< HEAD
export const getWishList = createAsyncThunk("user/get-wishlist", async (_, thunkAPI) => {
=======
export const getWishList = createAsyncThunk("user/get-wishlist", async (thunkAPI) => {
>>>>>>> 9f19b3122122231ef1eb29c6a78e4f9dede688e6
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
    try {
        return await userService.getWishList();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}
);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
export const applyCoupon = createAsyncThunk("user/apply-coupon", async (coupon, thunkAPI) => {
    try {
        console.log(coupon);
        return await userService.applyCoupon(coupon);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}
);

export const createOrder = createAsyncThunk("user/create-order", async (values, thunkAPI) => {
    try {
        console.log(values);
        return await userService.createOrder(values);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}
);

export const getOrderByUser = createAsyncThunk("user/get-orders", async (_, thunkAPI) => {
    try {
        return await userService.getOrdersByUser();
    } catch (error) {
<<<<<<< HEAD
        if (error) {
            // Token hết hạn, xóa thông tin người dùng khỏi localStorage và chuyển hướng đến trang đăng nhập
            thunkAPI.dispatch(logoutUser());
            window.location.assign("/")
        }
=======
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
        return thunkAPI.rejectWithValue(error);
    }
}
);

export const getDetailOrderByUserId = createAsyncThunk("user/get-detail-order", async (id, thunkAPI) => {
    try {
        return await userService.getDetailOrderByUserId(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}
);

<<<<<<< HEAD
=======
=======
>>>>>>> 9f19b3122122231ef1eb29c6a78e4f9dede688e6
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
export const authSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: [],
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = "success";
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = "success";
                if (state.isSuccess === true) {
                    toast.success("Login Successfully");
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
                if (state.isError === true) {
                    toast.error("Invalid Email or Password");
                }
            })
            .addCase(refreshToken.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(refreshToken.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = "success";
            })
            .addCase(refreshToken.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
<<<<<<< HEAD
                if (action.error.status === 401) {
                    // Token hết hạn, xóa thông tin người dùng khỏi localStorage và chuyển hướng đến trang đăng nhập
                    // localStorage.removeItem("user");
                    // toast.error("Please Login now");
                    console.log(action.error);
                }
=======
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
            })
            .addCase(getUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.userinfo = action.payload;
                state.message = "success";
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = "success";
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(forgotPasswordTokenUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forgotPasswordTokenUser.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.forgotPaswordToken = action.payload;
                state.message = "success";
            })
            .addCase(forgotPasswordTokenUser.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(resetPasswordUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resetPasswordUser.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.resetPassword = action.payload;
                state.message = "success";
            })
            .addCase(resetPasswordUser.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(ChangePasswordUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(ChangePasswordUser.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.changePassword = action.payload;
                state.message = "success";
            })
            .addCase(ChangePasswordUser.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(updateAUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateAUser.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.updateUser = action.payload;
                state.message = "success";
            })
            .addCase(updateAUser.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(addtoCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addtoCart.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.orders = action.payload;
                state.message = "success";
                if (state.isSuccess) {
                    toast.success("Added to cart")
                }
            })
            .addCase(addtoCart.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getaUserCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getaUserCart.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.orders = action.payload;
                state.message = "success";
            })
            .addCase(getaUserCart.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError) {
                    toast.error(action.error)
                }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
                state.isLoading = false;
            })
            .addCase(deleteProductfromCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteProductfromCart.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.orders = action.payload;
                state.message = "success";
            })
            .addCase(deleteProductfromCart.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getWishList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getWishList.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.wishlist = action.payload;
                state.message = "success";

            })
            .addCase(getWishList.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(applyCoupon.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(applyCoupon.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.coupon = action.payload;
                if (state.isSuccess === true) {
                    toast.success("Apply Successfully");
                }
            })
            .addCase(applyCoupon.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
                if (state.isError === true) {
                    toast.error("You have already used this coupon");
                }
            })
            .addCase(getOrderByUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrderByUser.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.orderByUser = action.payload;
            })
            .addCase(getOrderByUser.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
<<<<<<< HEAD

=======
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
            })
            .addCase(getDetailOrderByUserId.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getDetailOrderByUserId.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.detailOrder = action.payload;
            })
            .addCase(getDetailOrderByUserId.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
<<<<<<< HEAD
=======
=======
                state.isLoading = false;
            })
            .addCase(deleteProductfromCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteProductfromCart.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.orders = action.payload;
                state.message = "success";
            })
            .addCase(deleteProductfromCart.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getWishList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getWishList.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.wishlist = action.payload;
                state.message = "success";
            })
            .addCase(getWishList.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
>>>>>>> 9f19b3122122231ef1eb29c6a78e4f9dede688e6
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
    }
})

export default authSlice.reducer;