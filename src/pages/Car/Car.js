import  React,{useEffect,useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { purple,red,green } from '@material-ui/core/colors';
import { withStyles ,ThemeProvider,makeStyles,createTheme } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link ,useHistory} from 'react-router-dom';
import {CarIcon1,CarIcon2,CarIcon3,CarIcon4,CarIcon5,CarIcon6,CarIcon7,CarIcon8, CarIcon9,CarIcon10} from '../../components/icons/Icons'
import {postCarByVehicleId} from './store/CarSlice'
import './Car.scss'

const GreenSwitch = withStyles({
    
    switchBase: {
        
      color: red[300],
      '&$checked': {
        color: green[500],
      },
      '&$checked + $track': {
        backgroundColor: green[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  
  const theme = createTheme({
    palette: {
      primary: green,
    },
  });

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
        <div className="CarTogglePage">
            <div className="year-selector">
            <h4>Car Page Status</h4>
            </div>
            
            <ThemeProvider theme={theme}>
                <Button size="small" variant="contained" color="primary" onClick={()=>history.push(`/`)}>Back To Home Page</Button>
            </ThemeProvider>
            
            {/* <button >Home</button> */}

            <div className="CarPage">
                <div className="DoorDetail">
            <div>
            <h3>Left Front Side</h3>
            {
                fields.doorlockstatusfrontleft=="UNLOCKED"?
                <h4>LOCK</h4>:<h4>UNLOCK</h4>
            }
            </div>
            <div className="toggleDetail" >
            <GreenSwitch  value={fields.doorlockstatusfrontleft}  onChange={
                
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
                 
                
                 } checked={fields.doorlockstatusfrontleft=="UNLOCKED"?false:true}></GreenSwitch>
                 </div>
            <div>
            {
                fields.doorlockstatusfrontleft=="UNLOCKED"?<CarIcon2/>
                :<CarIcon6/>
            }
            </div>
            
            </div>
            <div className="DoorDetail">
                <div >
                <h3>Right Front Side</h3>
                {
                fields.doorlockstatusfrontright=="UNLOCKED"?
                <h4>LOCK</h4>:<h4>UNLOCK</h4>
            }
            </div>

            <div className="toggleDetail" >
            <GreenSwitch value={fields.doorlockstatusfrontright} onChange={
                
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
                
                
                }  checked={fields.doorlockstatusfrontright=="UNLOCKED"?false:true}></GreenSwitch>
                
                </div>
                <div>
                {
                fields.doorlockstatusfrontright=="UNLOCKED"?<CarIcon4/>
                :<CarIcon6/>
            }
                </div>
            
                </div>

               
                <div className="DoorDetail">
                    <div>
            <h3>Left Back Side</h3>
            {
                fields.doorlockstatusrearleft=="UNLOCKED"?
                <h4>LOCK</h4>:<h4>UNLOCK</h4>
            }
            </div>
            <div className="toggleDetail" >
            <GreenSwitch  value={fields.doorlockstatusrearleft} onChange={

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
                }  checked={carsAll&&fields.doorlockstatusrearleft=="UNLOCKED"?false:true}></GreenSwitch>
                </div>
                <div>
                {
                fields.doorlockstatusrearleft=="UNLOCKED"?<CarIcon5/>
                :<CarIcon6/>
            }
            </div>
            </div>
                
                <div className="DoorDetail">
                    <div>
            <h3>Right Back Side</h3>
            {
                fields.doorlockstatusrearright=="UNLOCKED"?
                <h4>LOCK</h4>:<h4>UNLOCK</h4>
            }
            </div>
            <div className="toggleDetail" >
            <GreenSwitch value={fields.doorlockstatusrearright} onChange={
                
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
                }  checked={carsAll&&fields.doorlockstatusrearright=="UNLOCKED"?false:true}></GreenSwitch>
                </div>
                <div>
             {
                fields.doorlockstatusrearright=="UNLOCKED"?<CarIcon3/>
                :<CarIcon6/>
            }
                </div>
             </div>
             </div>
            
        </div>
    )
}
