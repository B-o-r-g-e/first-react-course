import {useEffect, useState} from "react";
import BlogList from "./BlogList.jsx";
import useFetch from "./UseFetch.jsx";

const Blog = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs' />}


            {/*<BlogList blogs = {blogs*/}
            {/*    .filter(*/}
            {/*        (blog) => blog.author === 'Joy'*/}
            {/*    )}*/}
            {/*    title = "Joy's Blogs"*/}
            {/*/>*/}
        </div>
    )
}

export default Blog
