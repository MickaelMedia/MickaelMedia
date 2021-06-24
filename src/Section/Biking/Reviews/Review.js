import React from 'react';

import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./Review.css";

import Card from "../../../Components/Card/Card";
import Item from "../../../Components/Item/Item";
import HighTower2019 from "./HighTower2019/HighTower2019"
import Spark2018 from "./Spark2018/Spark2018";
import Altitude2021 from './Altitude/Altitude2021';

function Review() {
    return (
        <div className="review">
            <Item backgroundImg="https://s14761.pcdn.co/wp-content/uploads/2020/09/Propain-spindrift-cf-2021-enduro-test-review36-810x551.jpg" title="Welcome to the review"/>

            <article>
                <p>Sit back and relax, click on a few cards and you can have fun looking at the reviews</p>
            </article>
            
            <h2>Latest Reviews</h2>
            <div className="review__card__space">
                <Card title="EWS winner" description="Want to know what I think about the winning EWS bike" image="https://www.bikes.com/sites/default/files/styles/model_image_slider_hires3k/public/models/Web_MY21_Altitude_29_A50_C2_Profile.jpg?itok=5eyYOY2_" link="/BikeReviews/Altitude2021"/>
                <Card title="One Up Composite Pedal" description="So you wanna get composite pedals" image=""/>
                <Card title="Aggressor vs Forekaster" description="coming soon" image="https://images-na.ssl-images-amazon.com/images/I/619CAxZA8nL._AC_SL1000_.jpg"/>
                <Card link="/BikeReviews/Hightower2019" image="https://p.vitalmtb.com/photos/products/23470/photos/36439/s1600_Hightower_Carbon_C_S_Mustard_and_Slate_Blue.jpg?1531954283" title="HighTower 2019" description="Review of the HighTower. Is it really the one Quiver Bike?"/>
                <Card link="/BikeReviews/Spark2018" image="https://p.vitalmtb.com/photos/products/22919/photos/34737/s1600_Spark_950.jpg?1525456068" title="Spark 2018" description="Review of the Scott Spark. XC performance and Trail Comfort?"/>
            </div>

            <Switch>
                <Route path="/BikeReviews/Hightower2019">
                    <HighTower2019 />
                </Route>
                <Route path="/BikeReviews/Spark2018">
                    <Spark2018 />
                </Route>
                <Route path="/BikeReviews/Altitude2021">
                    <Altitude2021 />
                </Route>
            </Switch>

        </div>
    )
}

export default Review
