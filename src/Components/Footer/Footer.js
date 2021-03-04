import React from 'react';
import "./Footer.css";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <footer className="grid">
                <div className="LOW">
                    <ul>
                        <li><a href="https://discord.gg/5DpGMsU" class="bottom"><img src="..\Opening Page\Ressources\discord.svg" alt=""/>Discord</a></li>
                        <li><a href="https://www.instagram.com/mickael_thebaud/?hl=fr-ca" class="bottom"><img src="..\Opening Page\Ressources\instagram.svg" alt=""/>Instagram</a></li>
                        <li><a href="https://www.twitch.tv/gamertebo" class="bottom"><img src="..\Opening Page\Ressources\twitch.svg" alt=""/>Twitch</a></li>
                        <li><a href="https://twitter.com/Mickaeltebo" class="bottom"><img src="..\Opening Page\Ressources\twitter-square.svg"alt=""/>Twitter</a></li>
                        <li><a href="https://www.youtube.com/channel/UCGsrXr2gn7RdNP-OzvVsqWg?view_as=subscriber" class="bottom"><img src="..\Opening Page\Ressources\youtube-square.svg" alt=""/>Youtube</a></li>
                    </ul>
                </div>
                <div className="contactme">
                    <Link to="/About_Me"><li>About Me/Dev Notes</li></Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer
