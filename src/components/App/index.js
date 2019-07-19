import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
import Home from "../../routes/Home";
import OAuthCallback from "../../routes/OAuthCallback";
import { Provider } from "../Context";
import reducer, { useThunkReducer } from "../reducer";
import defaultState from "../defaultState";

const App = ({ value = defaultState }) => {
  const [state, dispatch] = useThunkReducer(reducer, {
    ...defaultState,
    ...value
  });
  const newDispatch = (action, timeout, followUpAction) => {
    dispatch(action);
    if (typeof timeout === "number") {
      setTimeout(() => {
        dispatch({
          type: "CLEAR",
          payload: {
            timeStamp: action.payload.timeStamp,
            timeOut: timeout + action.payload.timeStamp
          }
        });
      }, timeout);
    }
  };
  return (
    <Provider value={[state, newDispatch]}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/oauth/callback" component={OAuthCallback} />
        <Route exact path="/ajax/proxy/" component={Home} />
      </Switch>
    </Provider>
  );
};

App.propTypes = {
  value: PropTypes.object
};
export default App;
