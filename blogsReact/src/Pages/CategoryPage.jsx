import React from 'react'
import { useNavigate, useLocation} from 'react-router-dom'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const CategoryPage = () => {

    const navigation = useNavigate()
    const location = useLocation()

    const category = location.pathname.split('/').at(-1)
  return (
    <div className='mt-[60px]'>
        <Header/>
        <div className='flex flex-col justify-center items-center pt-8'>
            <button onClick={() => navigation(-1)}>
                back
            </button>
            <h2>Blogs on {category} </h2> 
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage