// src/pages/LoginPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

function GoogleSignIn() {
  const handleSignIn = async () => {
    try {
      if (window.gapi && window.gapi.auth2) {
        const auth = window.gapi.auth2.getAuthInstance();
        const googleUser = await auth.signIn();
        const profile = googleUser.getBasicProfile();
        const name = profile.getName();
        const email = profile.getEmail();

        console.log('Google Name:', name);
        console.log('Google Email:', email);

        // Send the data to the backend to store in the SQLite database
        try {
          const response = await fetch('http://localhost:3000/add-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
          });

          const data = await response.json();
          if (response.ok) {
            console.log('User saved successfully:', data);
            alert('Google Sign-In successful and user saved!');
          } else {
            console.error('Error saving user:', data.error);
            alert('Sign-In successful but failed to save user.');
          }
        } catch (err) {
          console.error('Network error:', err);
          alert('Failed to save user information.');
        }
      } else {
        console.error('Google API is not initialized.');
        alert('Google Sign-In is not available at the moment.');
      }
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  };

  return <button onClick={handleSignIn}>Sign in with Google</button>;
}

function AppleSignIn() {
  const handleSignIn = () => {
    const appleConfig = {
      clientId: 'YOUR_APPLE_CLIENT_ID',
      redirectURI: 'YOUR_APPLE_REDIRECT_URI',
      scope: 'name email',
      state: 'YOUR_APPLE_STATE',
    };

    const appleURL = `https://appleid.apple.com/auth/authorize?client_id=${appleConfig.clientId}&redirect_uri=${appleConfig.redirectURI}&response_type=code&scope=${appleConfig.scope}&state=${appleConfig.state}`;
    window.location.href = appleURL;
  };

  return <button onClick={handleSignIn}>Sign in with Apple</button>;
}

function MicrosoftSignIn() {
  const handleSignIn = () => {
    const microsoftConfig = {
      clientId: 'YOUR_MICROSOFT_CLIENT_ID',
      authority: 'https://login.microsoftonline.com/common',
      redirectURI: 'YOUR_MICROSOFT_REDIRECT_URI',
    };

    const microsoftURL = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${microsoftConfig.clientId}&response_type=code&redirect_uri=${microsoftConfig.redirectURI}&response_mode=query&scope=openid profile email&state=YOUR_MICROSOFT_STATE`;
    window.location.href = microsoftURL;
  };

  return <button onClick={handleSignIn}>Sign in with Microsoft</button>;
}

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const loadGoogleScript = () => {
      if (!document.getElementById('google-api-script')) {
        const script = document.createElement('script');
        script.id = 'google-api-script';
        script.src = 'https://apis.google.com/js/platform.js';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (window.gapi) {
            window.gapi.load('auth2', () => {
              window.gapi.auth2
                .init({
                  client_id: '93350900211-ip0t40l51vdqkg53qdnpdv470odp8lfi.apps.googleusercontent.com',
                })
                .then(
                  () => console.log('Google API initialized'),
                  (err) => console.error('Google API initialization error:', err)
                );
            });
          } else {
            console.error('Google API script did not load properly.');
          }
        };
        script.onerror = () => {
          console.error('Failed to load Google API script.');
        };
        document.body.appendChild(script);
      }
    };

    loadGoogleScript();
  }, []);

  return (
    <div className="login-page" style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Login to the Book Club</h1>
      <GoogleSignIn />
      <AppleSignIn />
      <MicrosoftSignIn />
      <div className="navigation-buttons">
        <button onClick={() => navigate('/community')}>Community</button>
        <button onClick={() => navigate('/books')}>View Books</button>
        <button onClick={() => navigate('/Homepage.js')}>Home</button>
      </div>
    </div>
  );
}

export default LoginPage;
