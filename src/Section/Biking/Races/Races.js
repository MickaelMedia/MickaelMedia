import React from 'react';
import Item from "../../../Components/Item/Item";
import { Switch, Link, Route} from 'react-router-dom';

import Training2021 from './Training/Training2021';

function Races() {
    return (
        <div>
            <Item backgroundImg="https://www.elasticinterface.com/wp-content/uploads/2018/02/enduro-Mtb-10-consigli-5-1.jpg" title="Time To Go fast"/>
            <Switch>
                <Route exact path='/BikeRaces'>
                    <article>
                        <h2>New Races</h2>
                        <p>My local race series is the <a href="https://www.wildsideenduro.com/">Wildside enduro</a>. My first race starts in July so I am gonna get pumped up for it and get ready to do my race. I`ll keep this segement updated as I get through the races and all the results I get.</p>
                        <h2>UPDATE:</h2>
                        <p>So I didn't et to do any races in 2021 because my work schedule got changed last minute and I was always working on the week-ends that there was a race. Maybe next time I still got time to do the whole racing thing for fun and experience :P .</p>
                    </article>
                    <article>
                        <h2>Racing Tips:</h2>
                        <p>My last race experience was in 2020 for the Wildside. It's been awhile but I still think I can offer a few tips.</p>
                        <p>Tips for racing:</p>
                        <b>#1 Pre-day track recon</b>
                        <p>Most enduro races have a pre-race recon thats usually done 1-2 days before the race. Honestly this might be the most important thing to do. I Highly suggest you check out the tracks and search for the race lines that are faster.</p>
                        <b>#2 Check your gear</b>
                        <p>Depending on race condition you are going to want to change your setup. On rainier days you should decrease Psi in your tires and your shock as well as reduce rebound a bit to compensate. Always experiment with your setup before race day to dial your setting. If you don't its ok. But, the important aspect is feeling comfortable on your bike and making sure you can always maneuver without feeling awkward on your bike</p>
                        <b>#3 Its okay to be anxious</b>
                        <p>Especially if it's your first race you might not finish top 3 even in amateur. So don't sweat it. You gotta start somewhere and start with getting experience in the whole race setting. Your goal is to get better and being timed against better people and just hanging out with them is gonna push you to do your best. So Squash that anxiety with excitement ang just have a good time racing other people</p>
                        <p>On a sidenote I started training for 2021 click <Link to='/BikeRaces/Training2021'>here</Link> to learn more</p>
                    </article>
                </Route>
                <Route path='/BikeRaces/Training2021'>
                    <Training2021 />
                </Route>
            </Switch>
        </div>
    )
}

export default Races;
