import React from 'react';
import "./General.css";

import Item from "../../Components/Item/Item";
import Card from "../../Components/Card/Card";

function General() {
    return (
        <div className="general">
            <Item title="SKRRT" backgroundImg="https://images.unsplash.com/photo-1568226292321-dd67ff8b3b2b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjB0cmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
            <iframe title="YoutubeVid" className="general__iframe" src="https://www.youtube.com/embed/GeV0tS8wiyw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            <div className="general__intro"></div>
            <article>
                <h2>What is up</h2>
                <p>This section is going to have all the mountain biking stuff Feel free to browse in the new section or the pinned articles</p>
            </article>
            <h2 className="meh">What's New</h2>
            <div className="new">
                <Card title="One Up Composite Pedal" description="So you wanna get composite pedals" image=""/>
                <Card title="Aggressor vs Forekaster" description="coming soon" image="https://images-na.ssl-images-amazon.com/images/I/619CAxZA8nL._AC_SL1000_.jpg"/>
                <Card link="/BikeReviews/Hightower2019" image="https://p.vitalmtb.com/photos/products/23470/photos/36439/s1600_Hightower_Carbon_C_S_Mustard_and_Slate_Blue.jpg?1531954283" title="HighTower 2019" description="Review of the HighTower. Is it really the one Quiver Bike?"/>
                <Card link="/BikeReviews/Spark2018" image="https://p.vitalmtb.com/photos/products/22919/photos/34737/s1600_Spark_950.jpg?1525456068" title="Spark 2018" description="Review of the Scott Spark. XC performance and Trail Comfort?"/>
            </div>
        </div>
    )
}

export default General