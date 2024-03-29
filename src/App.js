import './App.css';

//All the sections I need to animate the first page that goes into the other pages
import Navbar from "./Components/NavBar/Navbar";
import Navitem from "./Components/NavBar/Navitem"
import Dropdown from "./Components/NavBar/Dropdown";
import Footer from "./Components/Footer/Footer";
import Blog from "./Section/Blog/Blog";
import BlogYear from "./Section/Blog/BlogYear";
import Welcome from "./Section/Welcome";
import AboutMe from "./Section/About_Me";
import CodingProject from "./Section/Coding/Coding_Projects/CodingProject";
import Review from "./Section/Biking/Reviews/Review";
import Races from "./Section/Biking/Races/Races";
import General from "./Section/Biking/General";
import Coding101 from "./Section/Coding/Coding101/Coding101";
import Articles from "./Section/Nursing/Articles";

import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import Logo from "./Ressource/MMW.logo.png";


function App() {
  return (
    <div className="App">
      <Router>
        {/* So the way navbar works is it takes a few children, and thos childrens have children that get turned with a usestate from on to off. If you want to understand more about it go into the components section. and the hierarchy goes Navbar ==> Navitem ==> DropDown ==> DropDownItem*/}
        <Navbar>
              <Link to="/"><img src={Logo} alt="MT Logo"/></Link>
              <div>
                <Navitem icon="Biking 🚵">
                  <Dropdown first="General" firstLink="/BikeGeneral" second="Races" secondLink="/BikeRaces" third="Reviews" thirdLink="/BikeReviews"/>
                </Navitem>

                <Navitem icon="Blog π">
                  <Dropdown first="Monthly Blog" firstLink="/BlogMonth" second="Yearly Blog" secondLink="/BlogYear"></Dropdown>
                </Navitem>

                <Navitem icon="Coding 👾">
                  <Dropdown first="Coding 101" firstLink="/CodingTut" second="Projects" secondLink="/CodingProjects"></Dropdown>
                </Navitem>

                <Navitem icon="Nursing 💉">
                  <Dropdown first="Articles" firstLink="/NursingArticles" second="Nursing 101" secondLink="/Nursing101"></Dropdown>
                </Navitem>
              </div>
        </Navbar>

        <Switch >
          <Route exact path="/MickaelMedia/"><Welcome /></Route>

          <Route exact path="/"><Welcome /></Route>
          
          <Route path="/About_Me"><AboutMe /></Route>
          
          <Route path="/BlogMonth"><Blog /></Route>

          <Route path="/BlogYear"><BlogYear /></Route>
          
          <Route path="/BikeGeneral"><General /></Route>
          
          <Route path="/BikeRaces"><Races /></Route>
          
          <Route path="/BikeReviews"><Review /></Route>
          
          <Route path="/CodingTut"><Coding101 /></Route>

          <Route path="/CodingProjects"><CodingProject /></Route>

          <Route path="/NursingArticles"><Articles /></Route>

          <Route path="/Nursing101"><iframe title="Broken worker for a Borken Link" src="https://giphy.com/embed/XZpjG5s607xDJS1nKy" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/stickergiant-sticker-giant-XZpjG5s607xDJS1nKy">via GIPHY</a></p></Route>
          <Redirect to="/" />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
