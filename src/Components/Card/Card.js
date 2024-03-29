import React from 'react';
import "./Card.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Card({image, description, link, title,URL}) {
    return (
        <div className="container">
			<h2>{title}</h2>
		    <div className="box">
			    <div className="imgBx">
				    <img src={image}/>
			</div>
			<div className="content">
				    <p>{description}</p>
				    {URL ? <a href={URL}>Read More</a> : <Link to={link}>Read More</Link>}
			    </div>
		    </div>
		</div>
    )
}

export default Card
