import React from "react";

export class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);

    this.state = {
      latitude: null
    }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude } }) => this.setState({ latitude }),
      (err) => console.error(err)
    );
  }

  render() {
    const { latitude } = this.state;

    return (
      <div>
        Latitude: {latitude}
      </div>
    );
  }
}