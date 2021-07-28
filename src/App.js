import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Provider from "react-redux/es/components/Provider"
import store from "./store"
import  history  from './@history/@history';
import AppContext from "./AppContext"
import './App.scss';
import Home from "./pages/Home/Home";
import { Car } from "./pages/Car/Car";

function App(props) {
  return (
    <div className="App">
    <AppContext.Provider
		
		>
    
      <Provider store={store}>
      <Router history={history}>
          <Switch>
          <Route path="/vehicles/:vehicleId/doors" >
            <Car>
            </Car>
            </Route>
           <Route path="/">
             <Home/>
           </Route>
          </Switch>
        </Router>
      
    </Provider>
      
    
    </AppContext.Provider>
    </div>
  );
}

export default App;
