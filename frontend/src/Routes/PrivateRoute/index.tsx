import React from "react";
import { Redirect, Route } from "react-router-dom";

interface IPrivateRouteProps {
  path: string;
  redirect: string;
  isAuth: boolean;
  children: any;
  exact?: boolean;
  push?: boolean;
}

export default function PrivateRoute({
  path,
  redirect,
  children,
  isAuth,
  exact,
  push,
}: IPrivateRouteProps) {
  if (isAuth) {
    return (
      <Route path={path} exact={exact ? exact : false}>
        {children}
      </Route>
    );
  }

  return <Redirect to={redirect} push />;
}
