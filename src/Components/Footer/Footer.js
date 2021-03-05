import React from 'react';
import "./Footer.css";
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import TvIcon from '@material-ui/icons/Tv';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <footer className="grid">
                <div className="LOW">
                    <ul>
                        <li><a href="https://discord.gg/5DpGMsU" class="bottom"><img src="..\Opening Page\Ressources\discord.svg" alt=""/><SportsEsportsIcon /> Discord</a></li>
                        <li><a href="https://www.instagram.com/mickael_thebaud/?hl=fr-ca" class="bottom"><img src="..\Opening Page\Ressources\instagram.svg" alt=""/><InstagramIcon /> Instagram</a></li>
                        <li><a href="https://www.twitch.tv/gamertebo" class="bottom"><img src="..\Opening Page\Ressources\twitch.svg" alt=""/><TvIcon /> Twitch</a></li>
                        <li><a href="https://twitter.com/Mickaeltebo" class="bottom"><img src="..\Opening Page\Ressources\twitter-square.svg"alt=""/><TwitterIcon /> Twitter</a></li>
                        <li><a href="https://www.youtube.com/channel/UCGsrXr2gn7RdNP-OzvVsqWg?view_as=subscriber" class="bottom"><img src="..\Opening Page\Ressources\youtube-square.svg" alt=""/><YouTubeIcon /> Youtube</a></li>
                    </ul>
                </div>
                <div className="contactme">
                    <Link to="/About_Me"><li>About Me<br />Dev Notes</li></Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer
