import React, { useEffect } from "react";

const MicrosoftSignIn = () => {
  const CLIENT_ID = "YOUR_MICROSOFT_CLIENT_ID"; // Replace with your actual Client ID

  useEffect(() => {
    /* Load Microsoft’s Authentication library */
    const script = document.createElement("script");
    script.src = "https://alcdn.msauth.net/browser/2.13.0/js/msal-browser.min.js";
    script.async = true;
    script.onload = () => {
      const msalConfig = {
        auth: {
          clientId: CLIENT_ID,
        },
      };

      const msalInstance = new window.msal.PublicClientApplication(msalConfig);

      window.msLogin = msalInstance;
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleMicrosoftLogin = () => {
    window.msLogin
      .loginPopup({
        scopes: ["user.read"],
      })
      .then((response) => {
        console.log("Microsoft sign-in response:", response);
        // TODO: Send the token to your backend for verification
      })
      .catch((error) => {
        console.error("Microsoft login error:", error);
      });
  };

  return (
    <div>
      <button onClick={handleMicrosoftLogin}>Sign in with Microsoft</button>
    </div>
  );
};

export default MicrosoftSignIn;
