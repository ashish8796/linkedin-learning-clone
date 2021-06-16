import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageNotFound } from "./PageNotFound";
import Home from "../Pages/HomePage";
import Learning from "../Pages/LearningPage";
import SignIn from "../Pages/SignInPage";
// import { PageNotFound } from "./PageNotFound";
import VideoUploaded from "../Components/temp/VideoUploaded";
import Register from "../Pages/RegisterPage";
import InstructorRegister from "./../Pages/BecomeInstructor";
import Instructor from "../Pages/Instructor";
import QuestionNAnswer from "../Components/QuestionNAnswer/QuestionNAnswer";
import Test from "../Components/QuestionNAnswer/Test";
// import PaymentPage from "../Components/StripesPayment/PaymentPag";
import PaymentPage from "../Pages/PaymentPage";

export default function Routes() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
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
        <Route path="/signup" exact>
          <Register />
        </Route>

        <Route path="/instructor" exact>
          <Instructor />
        </Route>

        <Route path="/instructor/new" exact>
          <InstructorRegister />
        </Route>

        <Route path="/commentsPage">
          <Test />
        </Route>
        <Route path="/payment-page">
          <PaymentPage />
          </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
