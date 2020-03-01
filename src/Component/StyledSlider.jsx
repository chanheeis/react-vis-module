import {withStyles} from '@material-ui/core/styles';
import {Slider} from '@material-ui/core';

const StyledSlider=withStyles({
    root:{
        width:'20%',
        color:' #ff9999',
        height:8,
    },
    track:{
        height:8,
        borderRadius:4
    },
    mark:{
        height:0
    },
    markActive:{
        height:0
    },
    rail:{
        height:8,
        borderRadius:4
    },
    thumb:{
        height:16,
        width:16
    }
})(Slider)

export default StyledSlider;