import { Parallax } from "react-parallax";

import SpaceStation from "../img/spaceStation.jpeg";

import React from "react";

const ImageThree = () => {
    return (
        <Parallax
        className="image"
        blur={0}
        bgImage={SpaceStation}
        strength={800}
        >
        <div className="content">
            <span className="img-txt"> a trip to space</span>
        </div>
        </Parallax>
    );
    }

export default ImageThree;