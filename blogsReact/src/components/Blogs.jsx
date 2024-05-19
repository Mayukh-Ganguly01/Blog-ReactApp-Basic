import React from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import { useContext } from 'react'
import BlogDetails from './BlogDetails'
const Blogs = () => {

    //consume
    const{posts, loading} = useContext(AppContext);



  return (
    <div className='w-11/12 max-w-[670px] py-8 gap-y-7 mt-[60px] mb-[70px] flex flex-col mx-auto justify-center items-center '>
        {
            loading ? (<Spinner/>):(
                posts.length === 0 ? (<div>
                    <p>No post Found</p>
                </div>) : 
                (posts.map((post) => (
                    <BlogDetails key={post.id} post={post}/>
                )))
            )
        }
    </div>
  )
}

export default Blogs