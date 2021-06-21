import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageNotFound } from "./PageNotFound";
import Home from "../Pages/HomePage";
import Learning from "../Pages/LearningPage";
import SignIn from "../Pages/SignInPage";
import VideoUploaded from "../Components/temp/VideoUploaded";
import Register from "../Pages/RegisterPage";
import { State } from "../store/tsTypes";
import { AuthNavbar } from "./AuthNavbar/AuthNavbar";
import Instructor from "../Pages/Instructor";
import Test from "../Components/QuestionNAnswer/Test";
import BecomeInstructor from "./../Pages/BecomeInstructor";
// import PaymentPage from "../Components/StripesPayment/PaymentPag";
import PaymentPage from "../Pages/PaymentPage";
import CourseDetails from "../Pages/CourseDetails";
import ProgressPoint from "../Components/ProgressHomePage/ProgressPoint";
import CourseDescription from "../Components/CourseDescription/CourseDescription";
import PrivateRoute from "./PrivateRoute";
import SearchResult from "../Pages/SearchResults";

export default function Routes() {
  const isAuth = useSelector((state: State) => state.user.isAuth);

  return (
    <div>
      {!isAuth ? <Navbar /> : <AuthNavbar />}
      <Switch>
        <Route path="/" exact>
          <Home />
          <Footer />
        </Route>
        <PrivateRoute
          // path="/instructor"
          redirect="/"
          isAuth={isAuth}
          exact={true}
          path="/learning/:id"
        >
          <Learning />
        </PrivateRoute>
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

        <PrivateRoute
          path="/instructor"
          redirect="/"
          isAuth={isAuth}
          exact={true}
        >
          <Instructor />
        </PrivateRoute>

        <PrivateRoute
          path="/instructor/new"
          redirect="/"
          isAuth={isAuth}
          exact={true}
        >
          <BecomeInstructor />
        </PrivateRoute>

        <Route path="/instructor/courses/:id">
          <CourseDetails />
        </Route>

        <Route path="/commentsPage">
          <Test />
        </Route>
        <Route path="/payment-page">
          <PaymentPage />
        </Route>
        <Route path="/testing">
          {/* <ProgressPoint /> */}
          <CourseDescription />
        </Route>
        <Route path="/learnings/:search">
          <SearchResult />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}
