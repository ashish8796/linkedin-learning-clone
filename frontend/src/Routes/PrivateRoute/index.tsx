import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { State } from "../../store/tsTypes";

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
  const { flag } = useSelector((state: State) => state.user.userDetails);

  if (isAuth || flag) {
    return (
      <Route path={path} exact={exact ? exact : false}>
        {children}
      </Route>
    );
  }

  return <Redirect to={redirect} push />;
}
