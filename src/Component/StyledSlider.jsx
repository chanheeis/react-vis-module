import {withStyles} from '@material-ui/core/styles';
import {Slider} from '@material-ui/core';

const StyledSlider=withStyles({
    root:{
        width:'20%',
        minWidth:'250px',
        maxWidth:'400px',
        color:'#ff9999',
        height:20,
    },
    track:{
        height:8,
        borderRadius:4,
        color:'#fff'
    },
    mark:{
        height:0
    },
    markLabel:{
        marginTop:'10px',
        fontSize:'20px',
        color:'#fff'
    },
    rail:{
        height:8,
        borderRadius:6,
        color:'#fff'
    },
    thumb:{
        height:20,
        width:20
    }
})(Slider)

export default StyledSlider;