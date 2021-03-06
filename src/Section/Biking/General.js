import React from 'react';
import "./General.css";

import Item from "../../Components/Item/Item";
import Card from "../../Components/Card/Card";

function General() {
    return (
        <div className="general">
            <Item title="SKRRT" backgroundImg="https://instagram.fymq1-1.fna.fbcdn.net/v/t51.2885-15/e35/82391294_297782731395862_7866297689698578286_n.jpg?_nc_ht=instagram.fymq1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=fAaT3DPOh80AX-Y6EFz&tp=1&oh=e3368344976103d4b9a95ddd183a5fc6&oe=604AB9BD"/>
            <iframe title="YoutubeVid" className="general__iframe" src="https://www.youtube.com/embed/GeV0tS8wiyw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            <div className="general__intro"></div>
            <article>
                <h2>What is up</h2>
                <br />
                <p>This section is going to have all the mountain biking stuff Feel free to browse in the new section or the pinned articles</p>
                <h2>New Content</h2>
            </article>
            <div className="new">
                <Card link="/BikeReviews/Hightower2019" image="https://p.vitalmtb.com/photos/products/23470/photos/36439/s1600_Hightower_Carbon_C_S_Mustard_and_Slate_Blue.jpg?1531954283" title="HighTower 2019" description="Review of the HighTower. Is it really the one Quiver Bike?"/>
                <Card link="/BikeReviews/Spark2018" image="https://p.vitalmtb.com/photos/products/22919/photos/34737/s1600_Spark_950.jpg?1525456068" title="Spark 2018" description="Review of the Scott Spark. XC performance and Trail Comfort?"/>
            </div>
        </div>
    )
}

export default General