import { React, useState, useEffect } from 'react';
import Item from "../../Components/Item/Item";
import './Articles.css';
import Card from '../../Components/Card/Card';
import { HashRouter, Link, Switch, Route} from 'react-router-dom'

import RunningRowing from './Articles/RunningRowing';
import RunningRowingFR from './Articles/RunningRowingFR';


function Articles() {
    const [language,setLanguage] = useState(`english`)
    
    const toggleLanguage = () =>{
        if(language === 'english'){
            setLanguage('french')
        } else{
            setLanguage('english')
        }
    }

    useEffect(() => {
    }, [language])

    return (
        <div>
                 <Item title="Articles" desc="just some things that I think are fun to read" backgroundImg="https://www.360webdesigns.com/wp-content/uploads/2019/04/Insert-Image-Here.png"/>
                <div className='toggle__switch'>
                    <label class="switch">
                        <input type="checkbox" onChange={toggleLanguage}/>
                        <span class="slider round"></span>
                    </label>
                    {language === 'english' ? <p>Français</p> : <p>English</p>}
                </div>
                    <Switch>
                        <Route exact path='/NursingArticles'>
                            {language === 'english' ?
                            <article>
                                <p>In this section I am just gonna have a few articles that I think are interesting and also give my view on them</p>
                                <p>The first article that I am going to have here is an article on whether running or rowing as a pre-gym exercise is better. It is going to be the first article and also a testing parameter on whether or not my switch works well</p>
                            </article> :
                            <article>
                            <p>Cette section me permet de discuter et parler des articles que j'ai trouvé intéressant.</p>
                            </article>}
                            <div className='new'>
                                <Card title='Running or Rowing' description='just a vulgarisation of an article that compared VO2 max for those execrise' link='/NursingArticles/RunningRowing'/>
                            </div>
                            <h2 className="meh">Coming Soon</h2>
                            <div className="new">
                                    <Card title="Approach for Diabetes" description="coming soon" image="https://images-na.ssl-images-amazon.comimages/I/619CAxZA8nL._AC_SL1000_.jpg"/>
                            </div>
                        </Route>
                        <Route path='/NursingArticles/RunningRowing'>{ language === 'english' ? <RunningRowing /> : <RunningRowingFR/>}</Route>
                    </Switch>
        </div>
    )
}

export default Articles
