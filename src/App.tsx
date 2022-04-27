import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Routing } from './components/routes/Routing';
import { Footer } from './components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { authThunkCreator } from './BLL/authReducer';
import { Modal } from './components/modal/Modal';
import progressRocket from './assets/Rocket.gif'
import { Progress } from './components/progress/Progress';
import { AppRootStateType } from './BLL/store';
import { setProgressThunkCreator } from './BLL/progressReducer';


function App() {

  const progress = useSelector<AppRootStateType, boolean>(state => state.progress.progress)
  const dispatch = useDispatch()
  const [modalActive, setModalActive] = useState(false)

  useEffect(() => {
    dispatch(authThunkCreator())
    dispatch(setProgressThunkCreator(false))
  }, [])



  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
      <Modal active={modalActive} setActive={setModalActive} >
        <img src={progressRocket} alt="rocket" />
      </Modal>
      {progress && <Progress />}
    </div >
  );
}

export default App;
