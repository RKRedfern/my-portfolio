import React from "react";

export default function Blog({ dark, id }) {
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
            <h1> These are my blogs </h1>
        </div>
        </div>
    );
}