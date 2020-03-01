import React from 'react';
import ReactWordCloud from 'react-wordcloud'
import {makeStyles} from '@material-ui/core/styles';
import words from './dummyData/words';

const useStyles=makeStyles(theme=>({
    root:{
        width:'45%',
        minWidth:'500px',
        maxWidth:'700px',
        height:'350px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'20px',
        border:'5px solid #3D8BAB',
        background:'#fff',
        margin:'20px',
        padding:'20px'
    },
    cloudWrapper:{
        width:'90%',
        height:'90%',
    }
}))
const opt={
    deterministic:true,
    fontWeight:'600',
    fontSizes:[10,40],
    padding:3,
    fontFamily:'Noto Sans KR',
    enableTooptip:true,
    rotations:0
}
const callback={
    getWordColor:({type})=>{
        switch(type){
            case 1: return '#EA4435'
            case 2: return '#FCB215'
            case 3: return '#30A952'
            case 4: return '#42AADF'
            case 5: return '#547DBF'
            default: return '#30A952'
        }
    }
}

const WordCloud = () => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.cloudWrapper}>
                <ReactWordCloud
                    words={words}
                    options={opt}
                    callbacks={callback}
                />
            </div>

        </div>
    );
};

export default WordCloud;