import {useState} from "react";
import BlogList from "./BlogList.jsx";

const Blog = () => {
    const [blogs, /*setBlogs*/] = useState([
        {title: 'My new blog', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores iure nihil, nulla odio provident quasi repellat sit soluta voluptate voluptatem!', author: 'James', id: 1},
        {title: 'My new website', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores iure nihil, nulla odio provident quasi repellat sit soluta voluptate voluptatem!', author: 'Joy', id: 2},
        {title: 'My new cup', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores iure nihil, nulla odio provident quasi repellat sit soluta voluptate voluptatem!', author: 'Crane', id: 3}
    ])

    return (
        <div className="home">
            <BlogList blogs = {blogs} title = 'All Blogs' />
            <BlogList blogs = {blogs
                .filter(
                    (blog) => blog.author === 'Joy'
                )}
                title = "Mario's Blogs"
            />
        </div>
    )
}

export default Blog
