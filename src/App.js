import React from 'reactn';
import Container from '@material-ui/core/Container';
import SimpleAppBar from './components/SimpleAppBar';
import PaperSheet from './components/PaperSheet';
import SelectButton from './components/SelectButton';
import WeatherWidget from './components/WeatherWidget';




export default class App extends React.Component {
  
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  }

  constructor() {
    super();
    
  }
  getWeather = async (cityName) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c46d23cdb84dd4217a6e944e8dd9bcb4&units=metric`);
    const data = await api_call.json();

    console.log(data);
    if (!data.message) {

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon:data.weather[0].icon,
        error: ""
      });
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: "Please enter correct value!!"
      });
    }
  }
  render() {
    
    return (
      <Container maxWidth="sm">
        <SimpleAppBar />
        <PaperSheet title="Select City/State">
          <SelectButton event={this.getWeather} />
        </PaperSheet>
        {this.state.temperature &&
        <PaperSheet title="Current Weather">
          <WeatherWidget
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={''}
            icon={this.state.icon}
          />
        </PaperSheet>}


      </Container>


    );
  }
}
