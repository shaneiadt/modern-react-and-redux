import React from "react";

import { ImageCard } from "../ImageCard/ImageCard";
import './ImageList.css';

export const ImageList = (props) => {
    const images = props.images.map((image) => <ImageCard image={image} key={image.id} />);

    return (
        <div className="image-list">
            {images}
        </div>
    );
}