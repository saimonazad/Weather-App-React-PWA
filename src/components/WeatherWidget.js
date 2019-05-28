import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 80,
    width:80
  },
});

function WeatherWidget(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`http://openweathermap.org/img/w/${props.icon}.png`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Temperature: {props.temperature}
          </Typography>
          <Typography variant="h6" gutterBottom>
          Humidity: {props.humidity}
          </Typography>
          <Typography variant="h6" gutterBottom>
          Description: {props.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
          City: {props.city}
          </Typography>
          <Typography variant="h6" gutterBottom>
          Country: {props.country}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}

export default WeatherWidget;