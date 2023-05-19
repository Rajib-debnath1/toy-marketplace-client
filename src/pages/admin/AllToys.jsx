import React from 'react';
import useGetToyData from '../../shared/usegetData';
import { mainApi } from '../../shared/mainApi';
import SingleToy from '../SingleToy';
import Loader from '../../shared/Loader';

const AllToys = () => {
    const toysData = useGetToyData(`${mainApi}/alltoy`)
    
    return (
        <div>
            <h2>All Toys</h2>
            {/* for loader */}

            {toysData.length<2&&<Loader></Loader>}

            {/* for alldata */}
            <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {
                            toysData?.map(sport => {
                                // const { category, details, img, name, price, quantity, rating, seller, sellerImg } = sport
                                return <SingleToy sport={sport} key={sport?._id}></SingleToy>
                            })
                        }
                    </section>
            
            
        </div>
    );
};

export default AllToys;