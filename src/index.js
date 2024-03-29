import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Layout from './pages/layout';
import Home from './pages/home';
import Workers from './pages/Workers';
import Companies from './pages/Companies';
import Vehicles from './pages/Vehicles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './pages/css/app.scss';
import store from './store'
import { Provider } from 'react-redux'




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<LoginPage/>}/>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
