import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import StyledSlider from './StyledSlider';

const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        height:'100px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}))

const marks=[
    {
        value:0,
        label:'Daily'
    },
    {
        value:50,
        label:'Weekly'
    },
    {
        value:100,
        label:'Montly'
    }
];

const SliderComp = ({_setPeriod}) => {
    const classes=useStyles();
    const _handleChange=(e,newValue)=>{
        switch(newValue){
            case 0:{
                _setPeriod('daily');
                break;
            }
            case 50:{
                _setPeriod('weekly');
                break;
            }
            case 100:{
                _setPeriod('monthly');
                break;
            }
            default:{
                _setPeriod('daily');
            }
        }
    }

    return (
        <div className={classes.root}>
            <StyledSlider
                onChange={_handleChange}
                defaultValue={0}
                min={0}
                max={100}
                step={50}
                marks={marks}
            />
        </div>
    );
};

export default SliderComp;