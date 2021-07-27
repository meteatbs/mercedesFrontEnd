import { React, useEffect } from 'react';
import './Home.scss'
import { useDispatch, useSelector } from "react-redux"
import {getAllCars} from './store/HomeSlice'
import { CarTile } from '../../components/CarTile'


const Home = () => {

    const dispatch = useDispatch()

    const carsAll = useSelector(state => state.home.cars)

    console.log(carsAll)
    
    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    

    return (
        <div>
            <h1>Car List</h1>
            <div>
            {carsAll&&carsAll.map(car => <CarTile  key={car.vehicleId} carId={car.vehicleId}>list</CarTile>)}
            </div>
        </div>
    )
}

export default Home
