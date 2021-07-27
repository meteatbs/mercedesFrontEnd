import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const getAllCars = createAsyncThunk("Cars/cars/getallcars", async (params, { dispatch }) => {
    console.log(process)
	const response = await axios.get(`http://localhost:3000/vehicles`)
	const { data } = response
    console.log("cars slice : ",data)
	dispatch(setAllCars(data))

	return data
})




const HomeSlice = createSlice({
	name: "CarsList",
	initialState: {
        cars:[]
	},
	reducers: {
        setAllCars:(state,action)=>{
            console.log("cars List Slice",action.payload)
            if (action.payload) {
				state.cars = action.payload
			}
        }
        ,extraReducers: {
			// [getRoles.pending]: (state, action) => {
			// 	state.rolesLoading = true
			// },
			// [getRoles.fulfilled]: (state, action) => {
			// 	state.roles = action.payload
			// 	state.rolesLoading = false
			// },
			// [getRoles.rejected]: (state, action) => {
			// 	throw action
			// },
		},
	},
})

export const {setAllCars } = HomeSlice.actions

export default HomeSlice.reducer