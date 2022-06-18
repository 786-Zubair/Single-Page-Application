import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {

    // const blogs = props.blogs;
    // const title = props.title;
    //const deleteBlog = props.deleteBlog;

    return ( 
        <div className="blog-list">
            <p>{title}</p>
            {blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;