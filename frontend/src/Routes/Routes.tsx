import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Navbar } from "./Navbar";
import Learning from "../Pages/LearningPage";
import { Footer } from "./Footer";
import Home from "../Pages/HomePage";
import SignIn from "../Pages/SignInPage";
import { PageNotFound } from "./PageNotFound";
import VideoUploaded from "../Components/temp/VideoUploaded";

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
                <Route path="/uploading-video" exact>
                    <VideoUploaded />
                </Route>
                <Route path="/add-video">
                    <PageNotFound />
                </Route>
                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}
