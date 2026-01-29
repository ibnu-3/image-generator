import React, { useState } from 'react'
import FormField from '../components/FormField';
import Loader from '../components/Loader';

const Home = () => {
    const [loading, setLoading]=useState(false);
    const [searchTerm, seSsearchTerm] = useState('true')
    const [allPosts,setAllPosts]=useState(null);
  return (
    <section className='max-w-7xl mx-auto '>
       <div>
        <h1 className="font-extrabold">The Community Showcase</h1>
        <p className='mt-2 text-gray-500 px-4 '>Browse below</p>
       </div>
       <div className="pt-16">
        <FormField/>
       </div>
       <div className="mt-10">
        {loading ?(
            <div className='flex items-center justify-center'><Loader/></div>
        ):(<>
        {searchTerm && <h2 className='text-gray-400 px-4'>Showing result for "<span className='text-gray-800' >{searchTerm}</span>".</h2> }
        </>)}
       </div>
    </section>
  )
}

export default Home