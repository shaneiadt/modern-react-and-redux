import React from "react";

export class App extends React.Component {
  state = { latitude: null };

  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude } }) => this.setState({ ...this.state, latitude }),
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