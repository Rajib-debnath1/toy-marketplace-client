import { useContext } from "react";
import useGetToyData from "../../shared/usegetData";
import { AuthContext } from "../../firebase/AuthProvider";
import Loader from "../../shared/Loader";

import { mainApi } from "../../shared/mainApi";
import AdminSingleToy from "./AdminSigleToy";


const MyToys = () => {
    const {user} = useContext(AuthContext)
    const {data:toysData,refetch} = useGetToyData(`${mainApi}/myToy/${user?.email}`)
  
    return (
        <div>
            
              {/* for loader */}

            {toysData?.length<2&&<Loader></Loader>}

            {/* for alldata */}
            <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {
                            toysData?.map(sport => {
                                // const { category, details, img, name, price, quantity, rating, seller, sellerImg } = sport
                                return <AdminSingleToy sport={sport} refetch={refetch} key={sport?._id}></AdminSingleToy>
                            })
                        }
                    </section>
            
            
        </div>
    );
};

export default MyToys;