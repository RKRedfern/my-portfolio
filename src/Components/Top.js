import React from "react";
import RKRHeaderLogo from '../assets/RKRHeaderLogo.png'

export default function Top({ dark, id }) {
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
        <img
            src={RKRHeaderLogo}
            className="header-logo"
            alt="header-logo"
        />
        </div>
        </div>
    );
}
