import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../src/pages/Home/store/HomeSlice'
import carReducer from '../src/pages/Car/store/CarSlice'



export default configureStore({
    reducer: {
        home:homeReducer,
        car:carReducer,
    },
  });