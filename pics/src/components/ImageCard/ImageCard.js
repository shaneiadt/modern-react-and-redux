import React from 'react';

export class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imgRef = React.createRef();
    }

    onLoad = () => {
        console.log(this.imgRef.current.clientHeight);
    }

    render() {
        const { description, urls: { regular } } = this.props.image;

        return (
            <div>
                <img ref={this.imgRef} alt={description} src={regular} onLoad={this.onLoad} />
            </div>
        )
    }
}