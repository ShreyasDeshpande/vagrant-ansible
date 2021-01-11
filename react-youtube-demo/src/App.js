import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommandedVideos from "./RecommandedVideos";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <h1>Home page</h1>
            <div className="app__page">
              <Sidebar />
              <RecommandedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
