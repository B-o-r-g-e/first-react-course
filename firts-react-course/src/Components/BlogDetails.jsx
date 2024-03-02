import {useParams} from "react-router-dom";
import useFetch from "./UseFetch.jsx";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isPending} = useFetch('http://localhost:5173/blogs/' + id)
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                </article>
            )}
        </div>
    )
}

export default BlogDetails