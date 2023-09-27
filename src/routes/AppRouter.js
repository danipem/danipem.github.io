import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import { ExperienceScreen } from '../components/ExperienceScreen'
import { HomeScreen } from '../components/HomeScreen'
import { FormationScreen } from '../components/FormationScreen'
import { MoreScreen } from '../components/MoreScreen'
import { ContactScreen } from '../components/ContactScreen'

export const AppRouter = () => {

    return (
        <Router>
            <div className="">
                <Switch>
                    <Route exact path="/experience" component={ExperienceScreen}/>
                    <Route exact path="/formation" component={FormationScreen}/>
                    <Route exact path="/more" component={MoreScreen}/>
                    <Route exact path="/contact" component={ContactScreen}/>
                    <Route path="/" component={HomeScreen}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
        
    )
}