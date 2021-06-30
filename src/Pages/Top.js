import React from "react";
import RKRHeaderLogo3 from '../assets/RKRHeaderLogo3.png'

export default function Top({ dark, id }) {
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
        <img
            src={RKRHeaderLogo3}
            className="header-logo"
            alt="header-logo"
        />
        </div>
        </div>
    );
}
