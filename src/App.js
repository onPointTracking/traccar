import React from 'react'
import Header from "./Header";
import {Switch , Route} from 'react-router-dom'

// Here we import our Screen/Diff routes
import Home from './Screens/Home';
import Customers from './Screens/Customers';
import Devices from './Screens/Devices';
import Groups from './Screens/Groups';
import Geofences from './Screens/Geofences';
import Alerts from './Screens/Alerts';
import Statistics from './Screens/Statistics';
import Login from './Login';


<Header />
function App() {
    return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/customers" component={Customers}/>
                <Route exact path="/devices" component={Devices}/>
                <Route exact path="/groups" component={Groups}/>
                <Route exact path="/geofences" component={Geofences}/>
                <Route exact path="/alerts" component={Alerts}/>
                <Route exact path="/statistics" component={Statistics}/>
                <Route exact path="/login" component={Login}/>
            </Switch>

	)
}

export default App
