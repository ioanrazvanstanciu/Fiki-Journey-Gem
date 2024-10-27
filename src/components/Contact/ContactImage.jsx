import React from 'react';
import {ImageContainer} from "./Contact.style.js";


const ContactImage = ({ src }) => {
    return (<>
        <ImageContainer src={src} />
    </>


    );
};

export default ContactImage;