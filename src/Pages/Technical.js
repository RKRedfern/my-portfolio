import React from "react";

export default function Technical({ dark, id }) {
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
            <h1> Technical </h1>
        </div>
        </div>
    );
}