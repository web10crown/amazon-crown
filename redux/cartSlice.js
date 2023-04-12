import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		amount: 0,
		quantity: 0,
	},
	reducers: {
		add: (state, action) => {
			const product = state.products.find(
				(p) => p._id === action.payload._id
			);
			if (!product) {
				state.quantity += 1;
				state.amount += action.payload.price * action.payload.quantity;
				state.products.push(action.payload);
			} else {
				alert("already in cart");
			}
		},
		remove: (state, action) => {
			const data = state.products.find(
				(p) => p._id === action.payload._id
			);

			if (data) {
				const newData = state.products.filter(
					(p) => p._id !== action.payload._id
				);
				state.amount -= data.price * data.quantity;
				state.products = newData;
				state.quantity--;
			}
		},
	},
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
