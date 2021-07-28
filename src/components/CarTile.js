import { React ,useEffect} from 'react';
import { Link ,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import './CarTile.scss'
import {getCarByVehicleId} from '../pages/Car/store/CarSlice'
import {CarMercedes} from '../components/icons/Icons'

export const CarTile = ({carId}) => {

    const history=useHistory()

    const dispatch = useDispatch()
    console.log("handler ",carId)
   

    const detailHandler = carId => {
        console.log("handler ",carId)
            dispatch(getCarByVehicleId(carId))
            history.push(`/vehicles/${carId}/doors`)
    }

    

    return (
        <div className="CarTile">
            <div className="carId">
            <h1>
               <span>car id : </span>
                {/* /vehicles/:vehicleId/doors */}
                    {/* <Link  onClick={() => onDetailHandler(carId)} >$ nodemon app start
                        {carId} to={{pathname:`/vehicles/${carId}/doors`}}
                    </Link> */}

                    <Link  onClick={() => detailHandler(carId)}  >
                    
                        {carId}
                    </Link>
                    
                    
                </h1>
                </div>
                <div className="carIcon">
                <CarMercedes/>
                </div>
                
        </div>
    )
}