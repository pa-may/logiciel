import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Home from "./page/home/home";
import "./App.css";
import ImLooking from "./page/imlooking/imlooking";
import ImHiring from "./page/imhiring/imhiring";
import AboutUs from "./page/aboutus/aboutus";
import JobSearch from "./page/jobsearch/jobsearch";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/logiciel/" exact component={Home} />
          <Route path="/logiciel/im-looking" component={ImLooking} />
          <Route path="/logiciel/im-hiring" component={ImHiring} />
          <Route path="/logiciel/about-us" component={AboutUs} />
          <Route path="/logiciel/jobsearch" component={JobSearch} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
