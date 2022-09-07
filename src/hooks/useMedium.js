import { useState } from 'react'

function useMedium() {
    const user_medium_handle = "@seven22project"
    const [blogs, setBlogs] = useState([]);
    const fetchBlogs = async () => {
        const api_url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${user_medium_handle}`;
        const res = await fetch(api_url)
        const response = await res.json();
        // console.log({response})
        setBlogs(response?.items)
        return response
    }
  return {
    fetchBlogs,
    blogs
  }
}

export default useMedium