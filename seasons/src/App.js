import React from "react";
import { SeasonDisplay } from './SeasonDisplay';
import Spinner from "./Spinner";

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

    if (errorMessage === '' && !latitude) return <Spinner />;
    if (errorMessage !== '') return <p>{errorMessage}</p>;

    return <SeasonDisplay lat={latitude} />
  }
}