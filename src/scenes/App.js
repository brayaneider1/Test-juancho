import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import moment from 'moment'
import '../i18n/i18n'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Home } from './Home/Home';


export const App = () => {

  const { authentication } = useSelector(state => state.auth)

  useEffect(() => {
    moment.locale('en');
  }, []);

  return (
    <Home/>
  );
}
