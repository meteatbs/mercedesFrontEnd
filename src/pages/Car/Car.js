import  React,{useEffect,useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import Switch from '@material-ui/core/Switch';
import { Link ,useHistory} from 'react-router-dom';
import {postCarByVehicleId} from './store/CarSlice'

export const Car = () => {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });

    const history=useHistory()
    const dispatch = useDispatch()
    

    const [fields, setFields] = useState({
        vehicleId:"",
		doorlockstatusfrontleft: "",
		doorlockstatusfrontright: "",
		doorlockstatusrearleft: "",
		doorlockstatusrearright: "",
		doorstatusfrontleft: "",
		doorstatusfrontright: "",
		doorstatusrearleft: "",
		doorstatusrearright: "",
	})

    const carsAll = useSelector(state => state.car.carDetail[0])

    

    useEffect(() => {
        carsAll &&
		setFields({ ...fields,
            vehicleId:carsAll.vehicleId,
            doorlockstatusfrontleft: carsAll.doorlockstatusfrontleft,
            doorlockstatusfrontright: carsAll.doorlockstatusfrontright,
            doorlockstatusrearleft: carsAll.doorlockstatusrearleft, 
            doorlockstatusrearright: carsAll.doorlockstatusrearright,
            doorstatusfrontleft: carsAll.doorstatusfrontleft=="CLOSE"?false:true,
            doorstatusfrontright:carsAll.doorstatusfrontright=="CLOSE"?false:true,
            doorstatusrearleft: carsAll.emadoorstatusrearleftil=="CLOSE"?false:true,
            doorstatusrearright: carsAll.doorstatusrearright=="CLOSE"?false:true,
             })
	}, [carsAll])

    // console.log(fields.doorlockstatusfrontleft)
    console.log("carsAll",carsAll)

      const handleChange = (event) => {

        console.log(event.target.value)
        
        
        
      };

    console.log("car component",fields.doorlockstatusfrontleft)
   

    return (
        <div>
            <h1>Car page</h1>
            <h1>Status</h1>
            
            <h2>Left Front Side</h2>
            <button>Lock/Unlock</button>
            <Switch value={fields.doorlockstatusfrontleft}  onChange={
                
                (e) =>
                 {
                     console.log("e target",e.target.value)
                     setFields({ ...fields,
                    //    doorlockstatusfrontleft:
                        doorlockstatusfrontleft: fields.doorlockstatusfrontleft=="UNLOCKED"?"LOCKED":"UNLOCKED"
                         })
                    
                 if (fields) {
                     console.log("fields:",fields)
                     if (fields.doorlockstatusfrontleft=="UNLOCKED") {
                        fields.doorlockstatusfrontleft="LOCKED"
                     }else if (fields.doorlockstatusfrontleft=="LOCKED") {
                        fields.doorlockstatusfrontleft="UNLOCKED"
                     }
                    //  fields.doorlockstatusfrontleft=="UNLOCKED"?fields.doorlockstatusfrontleft="LOCKED":fields.doorlockstatusfrontleft=="LOCKED"?fields.doorlockstatusfrontleft="UNLOCKED":""
                     dispatch(postCarByVehicleId(fields))
                     
                 } 
                
                } 
                 
                
                 } checked={fields.doorlockstatusfrontleft=="UNLOCKED"?false:true}></Switch>
            <h2>Right Front Side</h2>
            <button>Lock/Unlock</button>
            <Switch value={fields.doorlockstatusfrontright} onChange={
                
                (e) =>
                {
                    console.log("e target",e.target.value)
                    setFields({ ...fields,
                   //    doorlockstatusfrontleft:
                   doorlockstatusfrontright: fields.doorlockstatusfrontright=="UNLOCKED"?"LOCKED":"UNLOCKED"
                        })
                   
                if (fields) {
                    console.log("fields:",fields)
                    if (fields.doorlockstatusfrontright=="UNLOCKED") {
                       fields.doorlockstatusfrontright="LOCKED"
                    }else if (fields.doorlockstatusfrontright=="LOCKED") {
                       fields.doorlockstatusfrontright="UNLOCKED"
                    }
                   //  fields.doorlockstatusfrontleft=="UNLOCKED"?fields.doorlockstatusfrontleft="LOCKED":fields.doorlockstatusfrontleft=="LOCKED"?fields.doorlockstatusfrontleft="UNLOCKED":""
                    dispatch(postCarByVehicleId(fields))
                    
                } 
               
               } 

                //  {
                //      console.log("e target",e.target.value)
                //      setFields({ ...fields,
                //         doorlockstatusfrontright: fields.doorlockstatusfrontright=="UNLOCKED"?"LOCKED":"UNLOCKED" 
                //  })
                //  if (fields) {
                //      console.log("fields:",fields)
                //      fields.doorlockstatusfrontright=="UNLOCKED"?fields.doorlockstatusfrontright="LOCKED":fields.doorlockstatusfrontright="LOCKED"
                //      dispatch(postCarByVehicleId(fields))
                //  }} 
                
                
                }  checked={fields.doorlockstatusfrontright=="UNLOCKED"?false:true}></Switch>
            <h2>Left Back Side</h2>
            <button>Lock/Unlock</button>
            <Switch  value={fields.doorlockstatusrearleft} onChange={

                (e) =>
                {
                    console.log("e target",e.target.value)
                    setFields({ ...fields,
                   doorlockstatusrearleft: fields.doorlockstatusrearleft=="UNLOCKED"?"LOCKED":"UNLOCKED"
                        })
                   
                if (fields) {
                    console.log("fields:",fields)
                    if (fields.doorlockstatusrearleft=="UNLOCKED") {
                       fields.doorlockstatusrearleft="LOCKED"
                    }else if (fields.doorlockstatusrearleft=="LOCKED") {
                       fields.doorlockstatusrearleft="UNLOCKED"
                    }
                    dispatch(postCarByVehicleId(fields))
                    
                } 
               
               } 
                }  checked={carsAll&&fields.doorlockstatusrearleft=="UNLOCKED"?false:true}></Switch>
            <h2>Right Back Side</h2>
            <button>Lock/Unlock</button>
            <Switch value={fields.doorlockstatusrearright} onChange={
                
                (e) =>
                {
                    console.log("e target",e.target.value)
                    setFields({ ...fields,
                        doorlockstatusrearright: fields.doorlockstatusrearright=="UNLOCKED"?"LOCKED":"UNLOCKED"
                        })
                   
                if (fields) {
                    console.log("fields:",fields)
                    if (fields.doorlockstatusrearright=="UNLOCKED") {
                       fields.doorlockstatusrearright="LOCKED"
                    }else if (fields.doorlockstatusrearright=="LOCKED") {
                       fields.doorlockstatusrearright="UNLOCKED"
                    }
                    dispatch(postCarByVehicleId(fields))
                    
                } 
               
               } 
                }  checked={carsAll&&fields.doorlockstatusrearright=="UNLOCKED"?false:true}></Switch>
            {/* <Switch value={fields.doorlockstatusrearright} onChange={e => setFields({ ...fields, doorlockstatusrearright: fields.doorlockstatusrearright=="UNLOCKED"?"LOCKED":"UNLOCKED" })}  checked={carsAll&&fields.doorlockstatusrearright=="UNLOCKED"?false:true}></Switch> */}
            <p>Back To Home Page</p>
            <button onClick={()=>history.push(`/`)}>Home</button>
        </div>
    )
}
