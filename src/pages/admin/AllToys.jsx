import  { useState } from 'react';
import useGetToyData from '../../shared/usegetData';
import { mainApi } from '../../shared/mainApi';

import Loader from '../../shared/Loader';
import AdminSingleToy from './AdminSigleToy';
import useTitleRoutes from '../../shared/hooks/useTittle';


const AllToys = () => {
    useTitleRoutes("AllToys")
    const { data: toysData } = useGetToyData(`${mainApi}/alltoy`)

    const [search ,setSearch] = useState("")

    const handleSearch = event =>{
        setSearch(event.target.value)
        
    }
    console.log(search);

    return (
        <div>
            <h2 className='text-2xl  text-center font-bold my-3 font-serif'>All Toys</h2>

            {/* for search  */}

            <section className=' w-[80%] mx-auto py-3 block lg:flex gap-3 font-sans'>
                <h5 className='font-semibold my-2 '>Search Toys</h5>
                <input onChange={handleSearch} type="text" className='w-full py-2 shadow-2xl bg-slate-200 rounded-md px-3' placeholder='Search By name'/>

            </section>

            {/* for loader */}

            {toysData?.length < 2 && <Loader></Loader>}


            {/* for alldata */}
            <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    toysData?.
                    sort((a, b) => a.price - b.price)?.
                    filter(item =>item.name.toLowerCase().includes(search.toLocaleLowerCase()))?.
                    map(sport => {
                        // const { category, details, img, name, price, quantity, rating, seller, sellerImg } = sport
                        return <AdminSingleToy sport={sport} key={sport?._id}></AdminSingleToy>
                    })
                }
            </section>


        </div>
    );
};

export default AllToys;