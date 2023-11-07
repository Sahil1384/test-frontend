import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";


export const createDepart = createAsyncThunk(
    "depart/createDepart",
    async ({ data, navigate, toast }, { rejectWithValue }) => {
      try {
        const response = await api.createDepart(data);
        // console.log("10 ", response);
        toast.success("Dept Added Successfully");
        navigate("/ProjectsDepart");
        return response.data;
      } catch (err) {
        console.log("16 ",err.response.data);
        return err.response.data
        // return rejectWithValue(err.response.data);
      }
    }
  );

  const deptSlice = createSlice({
    name: "dept",
    initialState: {
      dept: {},
      depts: [],
      error: "",
      loading: false,
    },
    extraReducers: {
      [createDepart.pending]: (state, action) => {
        state.loading = true;
      },
      [createDepart.fulfilled]: (state, action) => {
        state.loading = false;
        state.tours = [action.payload];
      },
      [createDepart.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    },
});

export default deptSlice.reducer;