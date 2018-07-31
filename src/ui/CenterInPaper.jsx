import React from 'react'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate'

const styles = {
    centeredDiv: {
        height: 20,
        width: 20,
        backgroundColor: 'blue',
        color: 'white',
    },
    wrapper: {
        margin: 50,
        minHeight: 500,
        border: '1px solid red'
    },
    p1: {
        border: '1px solid green',
        padding: 30,
    },
    p2: {
        border: '1px solid blue',
        minHeight: 200,
        display: 'flex',
        //alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
}

const RenderDiv = withStyles(styles)(({ classes }) => {
    return (
      <div className={classes.centeredDiv}>Hi</div>

    )
})

//<RenderDiv />
const CenterInPaper = ({ classes }) => {
    
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.p1}>
                <Paper className={classes.p2}>
                    
                    <AddPhotoAlternate />
                </Paper>
            </Paper>
        </div>
    )
}



export default withStyles(styles)(CenterInPaper)