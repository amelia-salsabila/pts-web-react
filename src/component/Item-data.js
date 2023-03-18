import React from "react";
import Image from "./Item-image";
import Body from "./Item-body";

function ItemData({name, desc, image}) {

    return (
        <div class="item-data">
            <Image name={name} image={image} />

            <Body name={name} desc={desc} />
        </div>
    );
}
export default ItemData;