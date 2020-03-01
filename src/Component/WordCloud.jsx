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
        borderRadius:'20px',
        border:'5px solid #3D8BAB',
        background:'#fff',
        padding:'20px',
        margin:'20px'
    }
}))

const WordCloud = () => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <ReactWordCloud
                words={words}
            />
        </div>
    );
};

export default WordCloud;