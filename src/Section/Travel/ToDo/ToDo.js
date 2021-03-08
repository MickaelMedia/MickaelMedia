import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Item from '../../../Components/Item/Item';
import MTBOka from "./Oka/MTBOka";
import Card from "../../../Components/Card/Card";
import Trail1 from "./Oka/Oka_Ressource/20200721_091449.jpg"

function ToDo() {
    return (
        <div className="todo">
            <Switch>
                <Route exact path="/TravelTrips">
                    <Item backgroundImg="https://blog.klaxoon.com/wp-content/uploads/2020/06/template-vignette-TO-DO-LIST-1200x900.png" />
                        <h2 className="meh">New Stuff</h2>
                        <div className="new">
                            <Card image={Trail1} description="If you got time to bike In Oka Click Here" link="/TravelTrips/Oka" title="What to do In Oka"/>
                        </div>
                </Route>

                <Route path="/TravelTrips/Oka"><MTBOka /></Route>
            </Switch>
        </div>
    )
}

export default ToDo
