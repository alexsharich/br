import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Routing } from './components/routes/Routing';
import { Footer } from './components/footer/Footer';
import { useDispatch } from 'react-redux';
import { authThunkCreator } from './BLL/authReducer';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authThunkCreator())
  }, [])

  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div >
  );
}

export default App;
