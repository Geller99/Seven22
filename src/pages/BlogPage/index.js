import React, { useEffect } from 'react'
import BlogCard, { FeaturedBlogCard } from '../../components/BlogCard';
import useMedium from '../../hooks/useMedium';
// import blog_data from './data.json'
const BlogPage = () => {
    const {
        fetchBlogs,
        blogs
    } = useMedium();
    useEffect(() => {
        fetchBlogs();
         // eslint-disable-next-line 
    }, [])

    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
         // eslint-disable-next-line 
    }, [1])
    return (
        <div className="blog-page-container">
            <div className='blog-page-content'>
                <div className='section-heading'>Blog</div>
                <div className='blog-section-heading'>Press Releases</div>
                {blogs && blogs.length > 0 && <div className='featured-blog'>
                    <FeaturedBlogCard data={blogs[0]} />
                </div>}
                <div className='blog-list'>
                    {blogs?.map((item, index) => {
                        return <BlogCard
                            data={item}
                            key={item.guid}
                        />

                    })}
                </div>
                <div className='read-more-container'>
                    <div className='seperator left'></div>
                    <div className='seperator right'></div>
                    <button className='btn-primary'>Read More</button>
                </div>
            </div>
        </div>

    )
}

export default BlogPage;