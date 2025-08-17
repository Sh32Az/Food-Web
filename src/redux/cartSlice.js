import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { toast } from "react-toastify";
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        AddItem: (state, action) => {
            let exist = state.find((item) => item.id === action.payload.id);
            if (exist) {
                // return state.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item);
                toast.warning(`${action.payload.name}  already added`);
            }
            else {
                state.push(action.payload);
                toast.success(`${action.payload.name} added`);
            }
        },
        RemoveItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        IncreamentQty: (state, action) => {
            return state.map((item) => item.id === action.payload? { ...item, qty: item.qty + 1 } : item);
        },
        DecreamentQty: (state, action) => {
            return state.map((item) => item.id === action.payload? { ...item, qty: item.qty - 1 } : item);
        },

    }
})
export const { AddItem, RemoveItem ,IncreamentQty,DecreamentQty} = cartSlice.actions
export default cartSlice.reducer

