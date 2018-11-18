import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import React from "react";
import ReviewScreen from "./Screens/ReviewScreen";
import {ITEM_CATALOGUE, OFFERS, PLACE_ORDER, REVIEW_SCREEN} from "../RouteConstants";
import OrderCatalogueScreen from "./Screens/OrderCatalogueScreen";
import ConfirmOrder from "./Screens/ConfirmOrder";
import Navbar from "../components/Navbar";
import Offers from "./Screens/Offers";

const  RoutedApp =()=> {
    return(
        <div>
            <Router>
                <div>
                    <Navbar/>

                    <Switch>

                        <Route exact path="/"                  component={ReviewScreen}/>
                        <Route exact path={OFFERS}            component={Offers}/>
                        <Route exact path={ITEM_CATALOGUE}     component={OrderCatalogueScreen}/>
                        <Route  exact path={REVIEW_SCREEN}     component={ReviewScreen} />

                        <Route  exact  path={PLACE_ORDER}      component={ConfirmOrder}/>


                    </Switch>
                </div>

            </Router>
        </div>)
}

export  default  RoutedApp
