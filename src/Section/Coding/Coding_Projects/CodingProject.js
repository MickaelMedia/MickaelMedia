import React, {useState, useEffect} from 'react';

import "./CodingProject.css";
import Item from "../../../Components/Item/Item"
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Card from "../../../Components/Card/Card";

function CodingProject() {
    const [secret, setSecret] = useState();
    const bruh= () =>{
        setSecret('bruh');
    }

    return (
        <div className="coding__project">
            <Item backgroundImg="https://base.imgix.net/files/base/ebm/industryweek/image/2019/03/industryweek_34488_hacker_blue_light.png?auto=format&fit=crop&h=432&w=768" desc="Scroll Down to check out what I am having fun coding right now" title="SHHH, TOP SECRET PROJECTS"/>
            <h2 className="meh">Project List</h2>
            <article>
                <p>In this section right here I am gonna be talking about my projects and also showing how I code my specific projects</p>
                <a href="https://gifttry-89494.web.app">https://gifttry-89494.web.app</a> an exemple of one of my projects. If you want to check the GitHub repository its <a href="https://github.com/MickaelMedia/giftList">here</a>
                <p>If you want to read more on what this is and how I programmed it you can <Link to="/CodingProjects/GiftApp">click here</Link></p>
                <button type='button' onClick={bruh}>secret button don't press </button>{ secret == 'bruh' && <p>Why do you need to know my secrets</p>}
            </article>

            <div className="new">
            <Card title="My Website" description="How I coded the website that you are using right now"/>
            <Card title="GiftList" description="Just a giftlist that I made for my family and that you can do for yours"/>
            <Card title="Community Question" description="Coming Soon, got the logic down but havent made it yet" />
            </div>

            <Switch>
                <Route path="/CodingProjects/GiftApp">
                    <article>
                        <h2>What is this?</h2>
                        <p>If you checked it out you'll see that the project above is a gift list that can return the a specifi category of list with an selected value at the top. I did it because I was kinda sick of having to always tell people who want to buy me gift what to get me. So I just did a website. But, you can do this to return a list of items for a shop or use them as cards for a new section.</p>
                        <h2>How did you program this</h2>
                        <p>Well I had a hard time programming it in the beginning because I am not fluent in React. I am also pretty sure that what I did was not the best approach as well. What I did was put in a state that is dependent of my value imput. After the state is chosen It parses every card and either shows them or not if the value above corresponds with the state. For exemple if you press MTB you will only get MTB items. I had to implement another state to allow people to see all of the items together. That part kinda took awhile because I had to put a || (Or statement) with 2 IF statement. But again I just learnt about ES6 so I had to tinker with it a bit to get it to work <i>(Don't get me started with ES7).</i> I will have a link of the code to my GitHub and you can check it out. Feel free to take my Subgift component if you want to use it for your projects. This project is just for fun and if people use parts of it for theirs I am just going to be happy.</p>
                        <h2>Deep Dive</h2>
                        <p>Now that I put my gift list online and have it on my github account I can talk about it more in depth.</p>
                        <p>If you look at the file you'll realise that the giftlist is 3 parts. The Header, The gift area and finally the cards containing the gifts. Now the 2 latter are easy to program because they dont really need logic. Its more HTML. The gifts are the one who need to be well programed. I kinda have to give them a meaning so that my categories in the gift area can parse their value and return the appropriate gifts.</p>
                        <p>Now I have one bug/Side effect. If you keep the category at all it displays all the items with even space in between them. Now change it to MTB or Fashion. The items are spaced unevenly. The reason this happens is because all of the items become divs. For some unknown reason divs take 0px but when stacked together they take a bit of space and make the spacing between each item uneven. How am I going to fix that, I dunno LMAO</p>
                    </article>
                </Route>
            </Switch>
        </div>
    )
}

export default CodingProject
