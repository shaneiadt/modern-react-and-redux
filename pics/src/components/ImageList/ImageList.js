import React from "react";

export const ImageList = (props) => {
    console.log(props.images);

    const images = props.images.map(image => <img key={image.id} alt={image.alt_description} src={image.urls.regular} />);

    return (
        <>
            {images}
        </>
    );
}