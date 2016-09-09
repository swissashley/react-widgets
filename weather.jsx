import React from 'react';
import merge from 'lodash/merge';

class Weather extends React.Component {
  constructor(){
    super();
    this.state = {temp: ""};
  }

  componentDidMount() {
    let that = this;
    navigator.geolocation.getCurrentPosition((pos)=>{

    const setWeather = function(data) {
      that.setState({temp: data.main.temp});
    };

    that.getWeather(pos.coords, setWeather);


  });}

  print(pos) {
    console.log(pos);
  }

  render(){
    return (
      <div>
        <h3>Temp: {this.state.temp}</h3>
      </div>
    );
  }


  getWeather(pos, callback){
    var request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&APPID=3e878c984b7cd3def6c5d22f4f59f6e9`;
    console.log(url);
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);

        return callback(data);
      } else {
        // We reached our target server, but it returned an error
        console.log('error');
      }
    };
    request.send();
  }

}//  class end

//

export default Weather;
