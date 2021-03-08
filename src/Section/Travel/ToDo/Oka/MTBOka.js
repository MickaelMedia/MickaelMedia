import React from 'react';
import "../ToDo.css";
import Item from "../../../../Components/Item/Item";
import Map from "./Oka_Ressource/20200721_090734.jpg";
import Trail1 from "./Oka_Ressource/20200721_084944.jpg";
import Trail2 from "./Oka_Ressource/20200721_090954.jpg";
import Trail3 from "./Oka_Ressource/20200721_091508.jpg"

function MTBOka() {
    return (
        <div>
            <Item backgroundImg={Map} title="Making the Most out of Gradients"/>
            <br />
            <article>
                <p>This year is the year that the Oka trail center in CA, Quebec officially became a true pay to ride trail center. Oka was built by a community of volunteer in the past and the people who rode in Oka where the ones who knew about it through word of mouth or the local riders that built these trails. Throughout the years more people volunteered to help build the trails and add features that they wanted to ride like jumps, rock rollers and gaps. The trail center kept growing and attracted a lot of people for the small city of Oka which was already renowned for its cheese.</p>
                <p>Now with the implementation of a pay to ride system the abbey of Oka is going to use its revenue to grow the trails, help the city, its citizens and allow riders to get more variety. I spoke with a few of the people who work there, and they were telling me that the trails of Oka have started to get a lot more love since they started charging 10$ to access the trails. Parking is free in front of the abbey, but it might change to a pay to park system.</p>
                <br />
                <div className="article__picture">
                    <img src={Trail1} alt="Begining of a trail"/>
                    <h6>Gnarly first berm</h6>
                </div>
                <p>I went there on a weekend with an acquaintance who wanted to get back into mountain biking and the amount of people that come now is astonishing. Its really cool to see the trail center go from illegal trails, volunteer work, and finally pride of the city. The people that came were people who wanted to go for a chill ride, parents that were teaching their kids the sport of mountain biking and even us, people who want to go on certain trails to see if they can either put a new record on the local trails for airtime, or for Strava. </p>
                <div className="article__picture">
                    <img src={Trail3} alt="A lot of wooden bridges"/>
                    <h6>Who doesn't love a skiny? The answer is me</h6>
                </div>
                <p>Some of the updates I instantly noticed was the reshaping of the flow track at the top. The flow track is a spot that allows people to see how well they can chain rollers and jumps. The track consisted of a few rollers and maybe 3 small jumps. Now, they added a gigantic berm after the bridge into a M-L tabletop. Now it is a question of how well you can chain obstacles and create speed to gap a 3-meter bridge into a very lippy jump. To be honest, I really like the changes that they added because it becomes a beginner friendly track that can allow an expert too open new line.  </p>
                <p>Another Update they are going for is the addition of a bigger dirt jumps. I arrived during the remodeling of the jumps unfortunately. I cannot say now whether they are going to be big or not, but I have a good feeling about it. Apart from those changes to the Oka trail center most trails are the same but with well maintained berms of jumps. If you live in QC or near the RMM I think that checking out Oka would be a fun idea. </p>
                <div className="article__picture">
                    <img src={Trail2} alt="Pump into a 4 feet jump"/>
                    <h6>More jumps fore more air time</h6>
                </div>
            </article>
        </div>
    )
}

export default MTBOka
