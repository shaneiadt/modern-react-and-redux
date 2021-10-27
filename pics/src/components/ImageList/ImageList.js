import React from "react";

export const ImageList = (props) => {
    console.log(props.images);

    const images = props.images.map((image, i) => {
        return (
            <img alt="some random" src={image.urls.regular} />
        );
    });

    return (
        <>
            {images}
        </>
    );
}