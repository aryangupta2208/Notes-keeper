import React from "react";


const Footer = () => {

    const year = new Date().getFullYear();
    return(
        <>
        <footer>
            <p> copyright © {year} Aryan Gupta</p>
        </footer>
        </>
    )
}


export default Footer;