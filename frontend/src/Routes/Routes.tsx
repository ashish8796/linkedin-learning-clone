import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageNotFound } from "./PageNotFound";
import Home from "../Pages/HomePage";
import Learning from "../Pages/LearningPage";
import SignIn from "../Pages/SignInPage";
import Register from "../Pages/RegisterPage";

export default function Routes() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path="/learning" exact>
                  <Learning />
                </Route>
                <Route path="/learning-login" exact>
                    <SignIn />
                </Route>
                <Route path="/signup" exact>
                    <Register />
                </Route>
                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}
