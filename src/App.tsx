import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Routing } from './components/routes/Routing';
import { Footer } from './components/footer/Footer';
//import { authThunkCreator } from './BLL/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './BLL/store';
import { Navigate } from 'react-router-dom';
import { authThunkCreator } from './BLL/authReducer';




function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authThunkCreator)
  }, [])



  /* const dispatch = useDispatch()
  const auth = useSelector<AppRootStateType, any>(state => state.auth) */
  //const checkAuth = useSelector<AppRootStateType, boolean>(state=>state.checkAuth.checkAuth)

  /* useEffect(() => {
    dispatch(authThunkCreator())
  }, []) */
  /* if (checkAuth) {
    return <Navigate to='/profile' />
  } */


  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div >
  );
}

export default App;
