import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";

export default function Routes() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
            </Switch>
        </div>
    );
}
