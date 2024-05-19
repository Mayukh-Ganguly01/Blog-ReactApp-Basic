import React, { useContext } from 'react'
import { useState }from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { baseUrl } from '../baseUrl'
import { useEffect } from 'react'
import Header from '../components/Header'
import BlogDetails from '../components/BlogDetails'


const BlogPage = () => {
    const NewBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState(null)
    const [relatedblogs, setRelatedBlogs] = useState([])
    const location = useLocation()
    const navigation = useNavigate()
    const {setLoading, loading} = useContext(AppContext);    
    const blogId = location.pathname.split('/').at(-1)

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${NewBaseUrl}get-blog?blogId=${blogId}`
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            setBlog(data.blog)
            setRelatedBlogs(data.relatedBlogs)
        }
        catch(error){
          console.log("Error fetching data")
          setBlog(null)
          setRelatedBlogs([])
        }
        setLoading(false);
    }

    useEffect(() =>{
        if(blogId){
          fetchRelatedBlogs()
        }
    }, [location.pathname])



  return (  
    <div className='w-11/12 max-w-[670px] flex flex-col justify-center items-center mx-auto pt-24'>
        <Header/>
        <div className='flex flex-col mb-10'>
          <button onClick={() => navigation(-1)}>Back</button>
        </div>
        {
          loading ? (<p>loading</p>) : 
          blog ? (<div>
            <BlogDetails post={blog}/>
            <h2>Related Blogs</h2>
            {
              relatedblogs.map((post) =>(
                <div key={post.id}>
                  <BlogDetails post={post}/>
                </div>
              ))
            }
          </div>) : (<div><p>No blog found</p></div>)
        }
    </div>
  )
}

export default BlogPage