import React from "react";

export class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: ''
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude } }) => this.setState({ latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    const { latitude, errorMessage } = this.state;

    if (errorMessage === '' && !latitude) return <p>Loading...</p>;
    if (errorMessage !== '') return <p>{errorMessage}</p>;

    return (
      <div>
        Latitude: {latitude}
      </div>
    );
  }
}