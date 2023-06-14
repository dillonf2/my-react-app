
import './App.css';
import NavBar from './NavBar';
import { Route,Switch } from 'react-router-dom'
import Asset from './Asset';
import Home from './Home';
// import crypto from './db.json'
import Submit from './Submit';
import { useState,useEffect } from 'react';

function App(){
  const [assetList, setAssetList]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/crypto')
    .then((res)=>res.json())
    .then((data)=>{
      setAssetList(data)
    })
    
  },[])
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/Assets">
        <Asset assetList={assetList} setAssetList={setAssetList}/>
        </Route>
        <Route path="/Submit" >
        <Submit assetList={assetList} setAssetList={setAssetList}/>
        </Route>
      </Switch>

    </div>
  );
};

export default App;
