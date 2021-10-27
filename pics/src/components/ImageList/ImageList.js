import React from "react";

import './ImageList.css';

export const ImageList = (props) => {
    console.log(props.images);

    const images = props.images.map(({ id, description, urls: { regular } }) => <img key={id} alt={description} src={regular} />);

    return (
        <div className="image-list">
            {images}
        </div>
    );
}