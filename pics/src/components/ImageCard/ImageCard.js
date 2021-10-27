import React from 'react';

export class ImageCard extends React.Component {
    render() {
        const { description, urls: { regular } } = this.props.image;

        return (
            <div>
                <img alt={description} src={regular} />
            </div>
        )
    }
}