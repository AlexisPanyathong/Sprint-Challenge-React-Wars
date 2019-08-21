import React from "react";

export default function ImageCard({imgUrl}) {
    return (
        <div className="image-card">
            <img src={imgUrl} alt="People from Star Wars " style={{maxWidth: "385px"}} />
        </div>
    );
}