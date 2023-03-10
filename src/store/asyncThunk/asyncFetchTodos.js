import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../globalAPI';

export const asyncfetchTodos = createAsyncThunk(
    'todos/asyncfetchTodos',
    async function (_, thunkAPI) {
        try {
            const response = await axios(API);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
