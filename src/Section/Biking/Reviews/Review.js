import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./Review.css";

import Card from "../../../Components/Card/Card";
import Item from "../../../Components/Item/Item";
import HighTower2019 from "./HighTower2019/HighTower2019"
import Spark2018 from "./Spark2018/Spark2018";

function Review() {
    return (
        <div className="review">
            <Item backgroundImg="https://s14761.pcdn.co/wp-content/uploads/2020/09/Propain-spindrift-cf-2021-enduro-test-review36-810x551.jpg" title="Welcome to the review"/>
            <h2>Latest Reviews</h2>
            <div className="review__card__space">
                <Card title="Aggressor vs Forekaster" description="coming soon" image="https://images-na.ssl-images-amazon.com/images/I/619CAxZA8nL._AC_SL1000_.jpg"/>
                <Card title="Fox 36 vs Fox 32" description="coming soon" image="http://cdn.shopify.com/s/files/1/0349/7357/files/Fox36ForkFactoryandPerformanceSeries.jpg?v=1495824687"/>
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
            </Switch>

            <article>
                <p>Sit back and relax, click on a few cards and you can have fun looking at the reviews</p>
            </article>
        </div>
    )
}

export default Review
