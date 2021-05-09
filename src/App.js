import React, { useEffect, useState } from 'react';
import List from './List';
import withListLoading from './withListLoading';
import Ads from './mainpage/ads';
import classes from './app.module.css';
import Footer from './footer/footer';
import Header from './header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdsInfo from './ads_info/adsInfo';
import axios from 'axios'
import Registration from './registration/registration';
import Profile from './profile/profile';
import Login from './login/login';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './productForm/form';


function App(props) {


  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  const [appStateBboard, setAppStateBboard] = useState({
    loading: false,
    repos: null,
  });

  const ListLoadingHeader = withListLoading(Header);
  const ListLoadingAds = withListLoading(Ads);
  const ListLoadingAdsInfo = withListLoading(AdsInfo);





  useEffect(() => {
    setAppState({ loading: true });
    axios.all([
      axios.get('http://217.25.95.58/api/rubric/'),
      axios.get('http://217.25.95.58/api/bboard/')
    ])
    .then(axios.spread(function (reposRubric, reposBboard) {
      //... but this callback will be executed only when both requests are complete.

      const allRubric =  reposRubric.data;
      const allBboard =  reposBboard.data;
      setAppState({ loading: false, repos: allRubric });
     setAppStateBboard({ loading: false, repos: allBboard });

    }))},[setAppState]);
  return (
    <BrowserRouter>

    <div className={classes.app}>
        <ListLoadingHeader isLoading={appState.loading} repos={appState.repos} />
        {/* <ListLoadingAds isLoading={appStateBboard.loading} repos={appStateBboard.repos} /> */}
        <Route  exact path='/'  render={() =><ListLoadingAds isLoading={appStateBboard.loading} repos={appStateBboard.repos} />}/>
        <Route exact path='/product/avtomobil' render={() =><ListLoadingAdsInfo isLoading={appStateBboard.loading} repos={appStateBboard.repos} />}></Route>
        <Route exact path='/user/admin' component={Profile}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/registration' component={Registration}></Route>
        <Route exact path='/form' component={Form}></Route>
        <Route exact path='/profile' component={Profile}></Route>
   {/* <Profile/> */}


    <Footer state={props.state} ></Footer>
    </div>
   </BrowserRouter>
  );
}
export default App;
