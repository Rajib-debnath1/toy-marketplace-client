import { useEffect, useState } from "react";
import { mainApi } from "../shared/mainApi";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useGetToyData from "../shared/usegetData";


const Toys = () => {
    const [toy, setToy] = useState({})
    useEffect(() => {
        fetch(`${mainApi}/alltoy`)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [])

    const SportCarData = useGetToyData(`http://localhost:5000/toy/sportCar`)

    const MiniFireCarData = useGetToyData(`http://localhost:5000/toy/miniFire`)

    const PoliceCarData = useGetToyData(`http://localhost:5000/toy/policeCar`)
    console.log(SportCarData, "from single");
    // console.log(PoliceCarData);

    const handleDataNavigate = id =>{
        console.log(id);
    }

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Sport Car</Tab>
                    <Tab>Mini Fire</Tab>
                    <Tab>Police Car</Tab>
                </TabList>

                <TabPanel>
                    <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {
                            SportCarData?.map(sport => {
                                const { category, details, img, name, price, quantity, rating, seller, sellerImg } = sport
                                return <div className="bg-slate-200 shadow-xl rounded-lg flex flex-col" key={sport?._id}>
                                    <img src={img} className="h-[200px] w-[90%] mx-auto rounded" alt="image" />
                                   <aside className="p-3 ">
                                   <h3 className="font-bold text-2xl text-center font-serif">{name}</h3>
                                    <div className="flex justify-between p-3 font-mono">
                                        <h5> Price :{price} TK </h5>
                                        <h5>Rating: {rating}</h5>

                                        <h5 className="">Quantity: {quantity} pcs</h5>
                                    </div>
                                    <button
                                    onClick={()=>handleDataNavigate(sport?._id)}

                                     className="bg-blue-700 p-3 text-white font-bold rounded-md text-center ">See Details</button>
                                   </aside>
                                </div>
                            })
                        }
                    </section>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Toys;