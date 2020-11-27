import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "../home/Home";
import News from "../news/News";
import Login from "../login/Login";


function Layout() {
    return (
        <Router>
           
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/news" component={News} />
                    <Route path="/login" component={Login} />
                </Switch>
          
        </Router>
    
    );
        
   
}

export default Layout;