import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {FlexibleXYPlot} from 'react-vis';
import {VerticalGridLines} from 'react-vis';
import {LineMarkSeries} from 'react-vis';

//dummyDataList
import dailyData from './dummyData/dailyData';
import weeklyData from './dummyData/weeklyDate';
import monthlyData from './dummyData/montlyData';

const useStyles=makeStyles(theme=>({
    root:{
        width:'45%',
        minWidth:'500px',
        maxWidth:'700px',
        height:'350px',
        display:'flex',
        flexDirection:'row wrap',
        background:'#fff',
        borderRadius:'20px',
        border:'5px solid #3D8BAB',
        padding:'20px',
        margin:'20px'
    },
    graph:{
        width:'90%',
        height:'100%',
        justifySelf:'flex-end'
    },
    yAxisWrapper:{
        width:'10%',
        height:'100%',
        minWidth:'20px',
        display:'flex',
        flexFlow:'column wrap',
        justifyContent:'space-between',
        alignItems:'center'
    },
    yAxisIcon:{
        width:'60%',
        minWidth:'20px',
        height:'auto'
    }
}));

const Graph = ({period}) => {
    const classes=useStyles();

    const _setData=()=>{
        switch(period){
            case 'daily':{
                return dailyData;
            }
            case 'weekly':{
                return weeklyData;
            }
            case 'monthly':{
                return monthlyData;
            }
            default:{
                return dailyData;
            }
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.yAxisWrapper}>
                <img
                    alt="Very Bad" 
                    src="./image/1.png" 
                    className={classes.yAxisIcon}/>
                <img
                    alt="Bad" 
                    src="./image/2.png" 
                    className={classes.yAxisIcon}/>
                <img
                    alt="So so" 
                    src="./image/3.png" 
                    className={classes.yAxisIcon}/>
                <img
                    alt="Good" 
                    src="./image/4.png" 
                    className={classes.yAxisIcon}/>
                <img
                    alt="Very Good" 
                    src="./image/5.png" 
                    className={classes.yAxisIcon}/>
            </div>
            <div className={classes.graph}>
                <FlexibleXYPlot 
                    xType="time-utc"
                    margin={{bottom:10,top:10,left:10,right:10}}
                >
                    <VerticalGridLines/>
                    <LineMarkSeries 
                        data={_setData()}
                        stroke='#8fc2d6'
                        fill='#8fc2d6'
                        strokeWidth={3}
                        size={3}
                    />
                </FlexibleXYPlot>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Graph;