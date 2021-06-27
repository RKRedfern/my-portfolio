import React from "react";

export default function Top({ dark, id }) {
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
            <h1> Intro </h1>
        </div>
        </div>
    );
}
