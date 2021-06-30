import React, { useState, useEffect } from 'react';
import BlogTile from '../Components'

export default function Blog({ dark, id }) {

    const rss2json =
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmi-shelbyrose.medium.com%2Ffeed'
    const [myBlogs, setMyBlogs] = useState([])


    useEffect(() => {
        fetch(rss2json)
        .then((r) => r.json())
        .then((blogs) => {
            setMyBlogs(blogs.items)
        })
    }, [rss2json])


    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
            <BlogTile/>
            <BlogTile />
            <BlogTile />
        </div>
        </div>
    );
}