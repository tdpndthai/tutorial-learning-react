import React, {Component} from 'react';
import Home from "../Components/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import News from "../Components/News";

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/*đường dẫn bình thường gọi components Home,mỗi một Route là định 1 đường dẫn + components*/}
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/tin">
                        <News />
                    </Route>
                </div>
            </Router>
        );
    }
}

export default Routes;