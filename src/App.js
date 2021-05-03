import Home from './pages/Home.js'
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
