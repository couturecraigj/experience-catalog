import React from "react";
// import { DataService } from "forcejs";
// import Context from "../../components/Context";

const OAuthCallback = () => {
  console.log(window.parent.location.href);
  window.parent.postMessage(
    { type: "oauthCallback", url: window.location.href },
    window.location.origin
  );
  window.close();
  return <div />;
};
export default OAuthCallback;
