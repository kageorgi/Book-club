import React, { useEffect } from "react";

const AppleSignIn = () => {
  const CLIENT_ID = "YOUR_APPLE_CLIENT_ID"; // Replace with your actual Client ID
  const REDIRECT_URI = "YOUR_REDIRECT_URI"; // Replace with your redirect URI

  useEffect(() => {
    /* Load Apple's Identity Services library */
    const script = document.createElement("script");
    script.src = "https://appleid.apple.com/appleid/auth";
    script.async = true;
    script.onload = () => {
      window.AppleID.auth.init({
        clientId: CLIENT_ID,
        scope: "name email",
        redirectURI: REDIRECT_URI,
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleAppleCredentialResponse = (response) => {
    console.log("Apple sign-in response:", response);
    // TODO: Send the token to your backend for verification
  };

  const handleAppleLogin = () => {
    window.AppleID.auth.signIn().then(handleAppleCredentialResponse);
  };

  return (
    <div>
        <button onClick={handleAppleLogin}> Sign in with AppleId </button>
    </div>
  );
};

export default AppleSignIn;