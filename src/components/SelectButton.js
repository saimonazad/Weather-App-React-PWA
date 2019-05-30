import React, { setGlobal } from 'reactn';
import Select from 'react-select';
const API_KEY = "659ed62870d26b96a6bf259cf2c3f915";

const dummy = null;

class SelectButton extends React.Component {
  state = {
    selectedOption: null,
    itemList: [],
  }
  constructor(props) {
    super(props);
    
    // Don't do this!
    fetch(`https://ipapi.co/json/`)
      .then(response => response.json())
      .then(info => {
        fetch(`http://battuta.medunes.net/api/region/${info.country}/all/?key=4c7f8ec48d2ba0c78063e737b25ae5b4`)
          .then(response => response.json())
          .then(data => {
            data.map(key => (this.setState({ itemList: [...this.state.itemList, { value: key.region, label: key.region }] })))
            // Prints result from `response.json()` in getRequest
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
      
  }
  
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    setGlobal({
      city: `${selectedOption.value}`,
    });
    this.props.event(selectedOption.value);
    console.log(`Option selected:`, selectedOption);
  }
  render(props) {
    const { selectedOption } = this.state;
  
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.state.itemList}
        
      />
    );
  }
}

export default SelectButton;
