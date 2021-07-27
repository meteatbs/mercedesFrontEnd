import { createSlice, createAsyncThunk, createEntityAdapter, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"


export const getCarByVehicleId = createAsyncThunk("Cars/carsslice/getvehicleid", async (params, { dispatch, rejectWithValue }) => {
    const activeVehicleId  = params
    console.log("params : ", activeVehicleId)

    try {
        const response = await axios.get(`http://localhost:3000/vehicles/${activeVehicleId}/doors`)
        const { data } = response
        console.log("vehicleId :", data)

        
        dispatch(getVehicleDetail(data))
    } catch (error) {
        return rejectWithValue(error.data.response)
    }
})

export const postCarByVehicleId = createAsyncThunk("Cars/carsslice/postvehicleid", async (params, { dispatch, rejectWithValue }) => {
    
    const id=params.vehicleId
    
    console.log("params : ",params, id)

    try {
        const response = await axios.post(`http://localhost:3000/vehicles/${params.vehicleId}/doors`,params)
        const { data } = response
        console.log("vehicle data :", data)

        return data
    } catch (error) {
        return rejectWithValue(error.data.response)
    }
})


const CarSlice = createSlice({
    name: "carDetail",
    initialState: ({
        isDetailsActive: false,
        carDetail: []
    }),
    reducers: {
        getVehicleDetail: (state, action) => {
            state.carDetail = action.payload
        }
    },
    extraReducers: {},
})
export const { getVehicleDetail } = CarSlice.actions

export default CarSlice.reducer