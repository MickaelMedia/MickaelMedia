import React from 'react';
import { HashRouter, Switch, Link, Route } from 'react-router-dom';
import Prerequisite from './Prerequisite/Prerequisite';

import Item from "../../../Components/Item/Item";
import Card from "../../../Components/Card/Card";


function Coding101() {
    return (
        <div>
        <Item backgroundImg="https://i.cbc.ca/1.3241386.1443093888!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/classroom.jpg" title="How to get into Coding" desc="Coding is really easy, All you need to do is give it a shot"/>
        <Switch>
            <Route exact path='/CodingTut'>
                <article>
                    <h2>Welcome to Coding 101</h2>
                    <p>In this section we are gonna talk about how I got into coding and everything I learned so you can learn as well</p>
                    <p>I am not a professional by say, but I can help guide you on what to learn in order have a solid base and get better at coding.</p>
                    <p>Below you are going to find 4 cards that you can use to learn or doublecheck your coding skills. I suggest you start out with Prerequisite, HTML, CSS then JS. Don't worry coding is super easy ☺</p>
                </article>
                <div className="new">
                    <Card title="Prerequisite" description="Let's find out what you need installed to code" link='/CodingTut/Prerequisite'/>
                    <Card title="HTML" description="How to make the skeleton of your page and also some content"/>
                    <Card title="CSS" description="How to stylize your content"/>
                    <Card title="JS" description="How to make your skeleton move"/>
                </div>
            </Route>
            <Route path ='/CodingTut/Prerequisite'>
                <Prerequisite />
            </Route>
        </Switch>
        </div>
    )
}

export default Coding101
