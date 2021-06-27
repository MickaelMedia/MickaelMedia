import React from 'react';

import Item from "../Components/Item/Item";
import Opening from "../Ressource/Pic1.jpg";
import Card from "../Components/Card/Card"
import "./Welcome.css";
import Trail1 from "./Travel/ToDo/Oka/Oka_Ressource/20200721_091449.jpg"

//So this is the page I used as a template. and I will talk about the cards and the items.
// Items allow me to do that first part of the page that appears and indicate the the title and subject of the page. Item needs a title, an image for the background and description for the subtitle and finally a summary for the long text that you can go more into deatail if you want. I also added a variable that allows to have the text one side or the other just to make it more diverse if i bombard my page with items.
// cards are a feature to allow to present an image and title towards another article. the only thing that cards require are title, descritpion for when you hover on it and finally a picture to illustrate it.  

function Welcome() {
    return (
        <div>
            <div id="Body" className="app__items__container">
                <Item 
                title="Welcome"
                desc="This is my web portfolio for nursing ,coding and mountain biking"
                backgroundImg={Opening}
                summary="This website serves 3 purposes. Firstly, It allows me practice coding and setting up React.js . Secondly it allows me to make a visual Portfolio for people who are interested in hiring me. Lastly, It's my own personnal space to talk about the subjects mentioned in the header"
                />
                <Item 
                title="Nursing"
                desc="Science based Nursing"
                descLink="Click Here for more"
                backgroundImg={Opening}
                link="/Nursing101"
                summary="If you are a potentiel Nursing employer, The Sections that might interest you more are Nursing and also my Blog. It's a diary that includes how my months go. The nursing tab is more scientific vulgarisations of new approaches or concepts."
                pair="true"
                />
                <Item 
                title="Coding"
                desc="WebDev Aptitudes"
                descLink="Click Here for more"
                backgroundImg={Opening}
                link="/CodingProjects"
                summary="If you are more interested in my Coding skills You can check out my coding tab. Its going to have a how to get started in order to help people get into coding and also projects that I think are really cool."
                />
                <Item 
                title="Mountain Biking"
                desc="one word : SKRRRRRRRRRRRRRRRRRRRRRRRT"
                descLink="Click Here for more BRUH"
                backgroundImg={Opening}
                link="/BikeGeneral"
                summary="I am not the best mountain biker around, But I have fun trying out stuff that people think is insane. I am lot more oriented on speed and composure, but don't worry, I can still whip to have that extra STEEEEEZE #neverenoughsteeze."
                pair="true"
                />
            </div>
            <h2 className="meh">What's New</h2>
            <div className="new">
                <Card title="Prerequisite" description="Let's find out what you need installed to code" link='/CodingTut/Prerequisite' image="http://localhost:3000/MickaelMedia/static/media/Picture1.55a5ddff.jpg"/>
                <Card title="EWS winner" description="Want to know what I think about the winning EWS bike" image="https://www.bikes.com/sites/default/files/styles/model_image_slider_hires3k/public/models/Web_MY21_Altitude_29_A50_C2_Profile.jpg?itok=5eyYOY2_" link="/BikeReviews/Altitude2021"/>
                <Card link="/BikeReviews/Hightower2019" image="https://p.vitalmtb.com/photos/products/23470/photos/36439/s1600_Hightower_Carbon_C_S_Mustard_and_Slate_Blue.jpg?1531954283" title="HighTower 2019" description="Review of the HighTower. Is it really the one Quiver Bike?"/>
                <Card link="/BikeReviews/Spark2018" image="https://p.vitalmtb.com/photos/products/22919/photos/34737/s1600_Spark_950.jpg?1525456068" title="Spark 2018" description="Review of the Scott Spark. XC performance and Trail Comfort?"/>
                <Card image={Trail1} description="If you got time to bike In Oka Click Here" link="/TravelTrips/Oka" title="What to do In Oka"/>
            </div>
            <h2 className="meh">Coming Soon</h2>
            <div className="new">
            <Card title="Aggressor vs Forekaster" description="coming soon" image="https://images-na.ssl-images-amazon.com/images/I/619CAxZA8nL._AC_SL1000_.jpg"/>
            <Card title="HTML" description="How to make the skeleton of your page and also some content"/>
            <Card title="CSS" description="How to stylize your content"/>
            <Card title="JS" description="How to make your skeleton move"/>
            </div>
        </div>
    )
}

export default Welcome