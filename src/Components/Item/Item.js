import React from 'react';
import "./Item.css";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Item({title,backgroundImg,desc,descLink,summary,pair,link}) {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item__container">
                <div className="item__text">
                    <p className="item__title">{title}</p>
                    <div className="item__textDesc">
                    <p>{desc}</p>
                    </div>
                    {summary && <div className={ pair? "item__summary2": "item__summary"}>
                    <p>{summary}</p>
                    </div>}
                </div>
                <div className="item__lowerThird">
                    <Link to={link}>{descLink}</Link>
                </div>
            </div>
        </div>
    )
}

export default Item
