import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 1),
    marginBottom:10,
  },
}));

function PaperSheet(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h6" component="h3">
          {props.title}
        </Typography>
        
        {props.children}
      </Paper>
      
    </div>
  );
}

export default PaperSheet;