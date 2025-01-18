import React, { useEffect } from "react";

const GoogleSignIn = () => {
  const CLIENT_ID = "93350900211-ip0t40l51vdqkg53qdnpdv470odp8lfi.apps.googleusercontent.com"; // Replace with your actual Client ID

  useEffect(() => {
    /* Load Google's Identity Services library */
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-signin-btn"),
        {
          theme: "outline",
          size: "large",
        }
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    // TODO: Send the token to your backend for verification
  };

  return (
    <div>
      <div id="google-signin-btn"></div>
    </div>
  );
};

export default GoogleSignIn;
