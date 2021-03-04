import React from 'react';

import "./CodingProject.css";
import Item from "../../../Components/Item/Item"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function CodingProject() {
    return (
        <div className="coding__project">
            <Item backgroundImg="https://base.imgix.net/files/base/ebm/industryweek/image/2019/03/industryweek_34488_hacker_blue_light.png?auto=format&fit=crop&h=432&w=768"/>
            <article>
                <p>In this section right here I am gonna be talking about my projects and also showing how I code my specific projects</p>
                <a href="https://gifttry-89494.web.app">https://gifttry-89494.web.app</a> This is an exemple of one of my projects
                <p>If you want to read more on what this is and how I programmed it you can <Link to="/CodingProjects/GiftApp">click here</Link></p>
            </article>
            <Switch>
                <Route path="/CodingProjects/GiftApp">
                    <article>
                        <h2>What is this</h2>
                        <p>If you checked it out you'll see that the project above is a gift list that can return the a specifi category of list with an selected value at the top. I did it because I was kinda sick of having to always tell people who want to buy me gift what to get me. So I just did a website. But, you can do this to return a list of items for a shop or use them as cards for a new section.</p>
                        <h2>How did you program this</h2>
                        <p>Well I had a hard time programming it in the beginning because I am not fluent in React. I am also pretty sure that what I did was not the best approach as well. What I did was put in a state that is dependent of my value imput. After the state is chosen It parses every card and either shows them or not if the value above corresponds with the state. For exemple if you press MTB you will only get MTB items. I had to implement another state to allow people to see all of the items together. That part kinda took awhile because I had to put a || (Or statement) with 2 IF statement. But again I just learnt about ES6 so I had to tinker with it a bit to get it to work <i>(Don't get me started with ES7).</i> I will have a link of the code to my GitHub and you can check it out. Feel free to take my Subgift component if you want to use it for your projects. This project is just for fun and if people use parts of it for theirs I am just going to be happy.</p>
                        <h2>Deep Dive</h2>
                    </article>
                </Route>
            </Switch>
        </div>
    )
}

export default CodingProject
