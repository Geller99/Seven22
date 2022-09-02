import React from 'react'
import { Link } from 'react-router-dom';

const getDescriptionFromHTML = (html_description) => {
    let doc = new DOMParser().parseFromString(html_description, 'text/html')

    let first_p_tag_content = doc.querySelector('p').textContent;
    return first_p_tag_content
}
var error_image="/assets/images/blog_default.jpg"

const getFormatedDate = (original_format) => {
    return original_format
}
const getGUID = (uri) => {
    let guid = uri?.split('https://medium.com/p/')[1];
    return guid
}

function BlogCard({ data }) {
    let {
        title,
        pubDate,
        // link,
        guid,
        // author,
        description,
        thumbnail
    } = data;

    var thumbnail_image = thumbnail ? thumbnail : error_image
    return (
        <Link className='anchor-blog-card' to={`/blog/${getGUID(guid)}`}>
            <div className='blog-card'>
                <div className='blog-image'>
                    <img src={thumbnail_image} onError={e => { e.currentTarget.src = error_image; }} alt="" />
                </div>
                <div className='blog-info'>
                    <div className='heading'>{title}</div>
                    <div className='date-seperator mobile'></div>
                    <div className='date'>{getFormatedDate(pubDate)}</div>
                    <div className='date-seperator desktop'></div>
                    <div className='description'>{getDescriptionFromHTML(description)}</div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard

export function FeaturedBlogCard({ data }) {
    let {
        title,
        pubDate,
        // link,
        guid,
        // author,
        description,
        thumbnail
    } = data;
   
    var thumbnail_image = thumbnail ? thumbnail : error_image
    return (
        <Link className='anchor-blog-card' to={`/blog/${getGUID(guid)}`}>
            <div className='featured blog-card'>
                <div className='blog-image'>
                <img src={thumbnail_image} onError={e => { e.currentTarget.src = error_image; }} alt="" />
                </div>
                <div className='blog-info'>
                    <div className='left'>
                        <div className='heading'>{title}</div>
                        <div className='date-seperator'></div>
                        <div className='date'>{getFormatedDate(pubDate)}</div>
                    </div>
                    <div className='right'>

                        <div className='description'>{getDescriptionFromHTML(description)}</div>
                        <button className='btn-primary'>Read More</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}