import React, { useState, useEffect } from 'react';
import BlogTile from '../Components'

export default function Blog({ dark, id }) {

    const rss2json =
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40rkredfern'
    const [myBlogs, setMyBlogs] = useState([])

    useEffect(() => {
        fetch(rss2json)
        .then((r) => r.json())
        .then((blogs) => {
            setMyBlogs(blogs.items)
        })
    }, [rss2json])

    function displayBlogs() {
        return myBlogs.map(blog => {
            return <BlogTile key={blog.pubDate} blogData={blog} />
        })
    }

    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="grid-container" id={id}>
            {displayBlogs()}
        </div>
        </div>
    );
}