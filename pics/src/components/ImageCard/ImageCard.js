import React from 'react';

export class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        this.imgRef = React.createRef();
    }

    setSpans = () => {
        const height = this.imgRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);

        this.setState({ spans });
    }

    render() {
        const { description, urls: { regular } } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imgRef} alt={description} src={regular} onLoad={this.setSpans} />
            </div>
        )
    }
}