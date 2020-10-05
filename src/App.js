import React from 'react';
import './index.css';
import Home from './Home'
import Speech from './Speech'
import Pictures from './Pictures'
import Spider from './Spider'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'
class App extends React.Component{
    render(){
        return(
        <Router >
            <div>
            <Switch>
                
            </Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Speech" component={Speech} />
            <Route path="/Chat" component={Pictures} />
            <Route path="/Spider" component={Spider} />
            </div>
        </Router>
        )
    }
}

export default App;
