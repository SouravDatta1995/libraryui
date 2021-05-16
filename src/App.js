import './App.css';
import Login from "./components/Login/Login";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css"
import UserCredentials from "./components/Hooks/UserCredentials";

function App() {

    const {credentials ,setCredentials, clearCredentials} = UserCredentials()

    if(!credentials) {
        return <Login setCredentials={setCredentials}/>
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {credentials ? <Redirect to="/home" /> : <Login setCredentials={setCredentials}/>}
                </Route>
                <Route path="/home">
                    <Home clearCredentials={clearCredentials}/>/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
