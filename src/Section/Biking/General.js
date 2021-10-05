import React from 'react';
import "./General.css";

import Item from "../../Components/Item/Item";
import Card from "../../Components/Card/Card";

function General() {
    return (
        <div className="general">
            <Item title="SKRRT" backgroundImg="https://images.unsplash.com/photo-1568226292321-dd67ff8b3b2b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjB0cmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
            <div className="videoWrapper">
                <iframe title="YoutubeVid" className="general__iframe" src="https://www.youtube.com/embed/JeMMCID0kaQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            </div>
            <div className="general__intro"></div>
            <article>
                <h2>What is up</h2>
                <p>This section is going to have all the mountain biking stuff Feel free to browse in the new section or the pinned articles</p>
            </article>
            <h2 className="meh">What's New</h2>
            <div className="new">
                <Card title="EWS winner" description="Want to know what I think about the winning EWS bike" image="https://s14761.pcdn.co/wp-content/uploads/2020/09/Rocky-Mountain-Altitude-2021-Test-Review-Enduro-25.jpg" link="/BikeReviews/Altitude2021"/>
                <Card title="One Up Composite Pedal" description="So you wanna get composite pedals" image=""/>
                <Card title="Aggressor vs Forekaster" description="coming soon" image="https://images-na.ssl-images-amazon.com/images/I/619CAxZA8nL._AC_SL1000_.jpg"/>
                <Card link="/BikeReviews/Hightower2019" image="https://p.vitalmtb.com/photos/products/23470/photos/36439/s1600_Hightower_Carbon_C_S_Mustard_and_Slate_Blue.jpg?1531954283" title="HighTower 2019" description="Review of the HighTower. Is it really the one Quiver Bike?"/>
            </div>
        </div>
    )
}

export default General

