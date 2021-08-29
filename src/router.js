import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import MemberPage from "./components/memberPage/memberPage";


const Routes = () => (

    <BrowserRouter>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/" component={Home} />
            <Route path="/" component={MemberPage} />
        
            
        </Switch>
    
    </BrowserRouter>

);

export default Routes;