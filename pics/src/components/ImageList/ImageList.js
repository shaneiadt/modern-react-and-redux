import React from "react";

export const ImageList = (props) => {
    console.log(props.images);

    const images = props.images.map(({ id, description, urls: { regular } }) => <img key={id} alt={description} src={regular} />);

    return (
        <>
            {images}
        </>
    );
}