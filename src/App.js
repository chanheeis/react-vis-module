import React,{useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import '../node_modules/react-vis/dist/style.css'

import Title from './Component/Title';
import Graph from './Component/Graph';
import SliderComp from './Component/SliderComp';
import WordCloud from './Component/WordCloud';

const useStyles=makeStyles(theme=>({
  root:{
    width:'100%',
    display:'flex',
    flexFlow:'row wrap',
    justifyContent:'center',
    height:'auto',
    background:'#003853',
    margin:'20px auto',
    padding:'50px'
  }
}))

function App() {
  const classes=useStyles();
  const [period,setPeriod]=useState('daily');
  const _setPeriod=(value)=>{
    setPeriod(value);
  }
  return (
    <div className={classes.root}>
      <Title/>
      <Graph period={period}/>
      <WordCloud/>
      <SliderComp _setPeriod={_setPeriod}/>
    </div>
  );
}

export default App;
