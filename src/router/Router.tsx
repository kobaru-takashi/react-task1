import { Redirect, Switch, Route } from "react-router-dom";
import Login from "../components/pages/login/Login";
import MyPage from "../components/pages/mypage/MyPage";

export const Router = (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/MyPage" component={MyPage} />
    <Redirect path="/" to={"/"} />
  </Switch>
);
