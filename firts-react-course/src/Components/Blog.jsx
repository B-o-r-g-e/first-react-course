import {useState} from "react";

const Blog = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new blog', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores iure nihil, nulla odio provident quasi repellat sit soluta voluptate voluptatem!', author: 'James', id: 1},
        {title: 'My new website', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores iure nihil, nulla odio provident quasi repellat sit soluta voluptate voluptatem!', author: 'Joy', id: 2},
        {title: 'My new cup', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores iure nihil, nulla odio provident quasi repellat sit soluta voluptate voluptatem!', author: 'Crane', id: 3}
    ])

    return (
        <div className="home">
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key = {blog.id}>
                        <h1>{blog.title}</h1>
                        <p>{blog.author}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Blog