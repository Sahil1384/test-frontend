import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";


export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.getUsers();
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const departSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        error: "",
        loading: false,
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.loading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = [action.payload];
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }
    },
});

export default departSlice.reducer;