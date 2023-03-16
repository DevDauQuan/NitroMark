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

export const logoutUser = createAsyncThunk("auth/logout", async (thunkAPi) => {
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

export const getaUserCart = createAsyncThunk("user/get-cart", async (thunkAPI) => {
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

export const getWishList = createAsyncThunk("user/get-wishlist", async (thunkAPI) => {
    try {
        return await userService.getWishList();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}
);

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
    }
})

export default authSlice.reducer;