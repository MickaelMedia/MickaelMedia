import { React, useState } from 'react';
import Item from "../../Components/Item/Item";


function Articles() {
    
    const [language,setLanguage] = useState(``)

    return (
        <div>
                {/* <button setLanguage={French:English}>Français/English</button> */}
                <Item title="Articles" desc="just some things that I think are fun to read" backgroundImg="https://www.360webdesigns.com/wp-content/uploads/2019/04/Insert-Image-Here.png"/>
                <article>
                    <p>In this section I am just gonna have a few articles that I think are interesting and also give my view on them</p>
                </article>
        </div>
    )
}

export default Articles
