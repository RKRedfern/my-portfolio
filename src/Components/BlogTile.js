import React from 'react';


const BlogTile = ( props ) => {

    const { title, link, thumbnail, content, pubDate } = props.blogData;

    return (
        <div className="blog-card">
            <div className="card">
            

            {/* <div className="thumbnail">
            <img alt="whoops!" src={`${thumbnail}`} />
            </div> */}

            <div className="title" >
                <h3>{title}</h3>
            </div>

            {/* <div className="nav-item">
                <h3><a href={link}>{title}</a></h3>
            </div> */}

            
            <a href={link}> Read On Medium </a>
            

            </div>
        </div>
    );
}

export default BlogTile;