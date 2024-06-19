import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/mainpage/MainPage";
import ErrorPage from "./pages/errorpage/ErrorPage";
import React, { useState, useEffect } from 'react';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      if (user.name === 'John' && user.lastname === 'Johns') {
        console.log('Redirecting to MainPage...');
      } else {
        console.log('Redirecting to ErrorPage...');
      }
    }
  }, [user]);

  const handlePrompt = () => {
    const name = prompt('Введите ваше имя:');
    const lastname = prompt('Введите вашу фамилию:');

    setUser({ name, lastname });
  };

  return (
      <div className="App">
        <button onClick={handlePrompt}>Ввести имя и фамилию</button>
        {user && (
            user.name === 'John' && user.lastname === 'Johns' ? (
                <MainPage user={user} />
            ) : (
                <ErrorPage user={user} />
            )
        )}
      </div>
  );
}

export default App;
