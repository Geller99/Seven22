import HTMLReactParser from 'html-react-parser';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useMedium from '../../hooks/useMedium';
// import blog_data from '../BlogPage/data.json'
const BlogDetailPage = () => {
    const { id } = useParams();
    const [blogDetail, setBlogDetail] = useState(null);
    
    const {
        fetchBlogs,
         // eslint-disable-next-line 
        blogs
    } = useMedium();
    useEffect(() => {
        if (id) {
            fetchBlogDetail(id)
        }
         // eslint-disable-next-line 
    }, [id])
    const fetchBlogDetail = async (blog_id) => {
        let found_blog = "not-found";
        const response = await fetchBlogs(); // Get Liist of all blogs
        for (var i = 0; i < response?.items?.length; ++i) { // iterate through each blog item and compare guid
            var item = response?.items[i];

            if (item.guid === "https://medium.com/p/" + blog_id) {
                found_blog = item;
                break;
            }
        }
        // console.log(found_blog)
        setBlogDetail(found_blog)
    }
    useEffect(() => {
        window.scrollTo(0, 0);
         // eslint-disable-next-line 
    }, [1])
    var error_image="/assets/images/blog_default.png"
    var thumbnail_image = blogDetail?.thumbnail ? blogDetail?.thumbnail : error_image
    return (
        <div className="blog-detail-page-container">
            <div className='thumbnail'>
            <img src={thumbnail_image} onError={e => { e.currentTarget.src = error_image; }} alt="" />
                <div className='layer'></div>
                <div className='info'>
                    <div className='heading'>{blogDetail?.title}</div>
                    <div className='date'>{blogDetail?.pubDate}</div>
                </div>
            </div>
            <div className='author'>By Seven22NFT</div>
            <div className='content'>
                {blogDetail && HTMLReactParser(blogDetail?.content)}
            </div>
        </div>
    )
}

export default BlogDetailPage;