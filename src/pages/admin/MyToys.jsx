import { useContext } from "react";
import useGetToyData from "../../shared/usegetData";
import { AuthContext } from "../../firebase/AuthProvider";
import Loader from "../../shared/Loader";
import SingleToy from "../SingleToy";
import { mainApi } from "../../shared/mainApi";


const MyToys = () => {
    const {user} = useContext(AuthContext)
    const toysData = useGetToyData(`${mainApi}/myToy/${user?.email}`)
    console.log(user,"and",toysData);

    return (
        <div>
            
              {/* for loader */}

            {toysData.length<1&&<Loader></Loader>}

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

export default MyToys;