import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";
import Learning from "../Pages/LearningPage";
import { Footer } from "./Footer";

export default function Routes() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path="/learning">
                  <Learning />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}
