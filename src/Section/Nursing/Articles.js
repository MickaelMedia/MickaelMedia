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
                 <Item title="Articles" desc="just some things that I think are fun to read" backgroundImg="https://www.cgfns.org/wp-content/uploads/2019/05/registered-nurse-credentials-evaluation.png"/>
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
                                <Card title={language === 'english' ? 'Running or Rowing' : 'Courir ou rammer'} description={language === 'english' ? 'just a vulgarisation of an article that compared VO2 max for those execrise': `quelle exercice permet d'avoir un meilleur cardio`} link='/NursingArticles/RunningRowing' image="https://thewiredrunner.com/wp-content/uploads/2019/08/471388_-RowXRun_765x400_081619.png"/>
                                <Card title='Therapeutic Phlobotomy' description='What are the recommandations to give blood and who should give blood' URL="https://mickaelthebaud.medium.com/therapeutic-phlebotomy-f7991af95663" image="http://devtd.marscs.com/wp-content/uploads/2020/10/phlebotomy-technician-school.jpg"/>
                                <Card title='Shame and Sickness' description='Is it normal to feel shame when we are sick?' URL='https://mickaelthebaud.medium.com/the-guilt-of-being-sick-8975b0ea910b' image="https://miro.medium.com/max/600/1*K5FwMv-cZBC2-QciRCRe7A.jpeg"/>
                            </div>
                        </Route>
                        <Route path='/NursingArticles/RunningRowing'>{ language === 'english' ? <RunningRowing /> : <RunningRowingFR/>}</Route>
                    </Switch>
        </div>
    )
}

export default Articles
