import { React ,useEffect} from 'react';
import { Link ,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import './CarTile.scss'
import {getCarByVehicleId} from '../pages/Car/store/CarSlice'

export const CarTile = ({carId}) => {

    const history=useHistory()

    const dispatch = useDispatch()

   

    const detailHandler = carId => {
        console.log("handler ",carId)
            dispatch(getCarByVehicleId(carId))
            history.push(`/vehicles/${carId}/doors`)
    }

    

    return (
        <div className="TeamTile">
            <h1>
                {/* /vehicles/:vehicleId/doors */}
                    {/* <Link  onClick={() => onDetailHandler(carId)} >$ nodemon app start
                        {carId} to={{pathname:`/vehicles/${carId}/doors`}}
                    </Link> */}

                    <Link  onClick={() => detailHandler(carId)}  >
                        {carId}
                    </Link>
                </h1>
        </div>
    )
}