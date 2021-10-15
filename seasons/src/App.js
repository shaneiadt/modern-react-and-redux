import React from "react";

export class App extends React.Component {
  state = { lat: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ ...this.state, lat: position.coords.latitude });
      },
      (err) => console.error(err)
    );
  }

  render() {
    return (
      <div>
        Latitude: {this.state.lat}
      </div>
    );
  }
}