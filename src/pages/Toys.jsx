import { useEffect, useState } from "react";
import { mainApi } from "../shared/mainApi";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useGetToyData from "../shared/usegetData";
import SingleToy from "./SingleToy";
import Loader from "../shared/Loader";


const Toys = () => {
    // const [toy, setToy] = useState({})
    // useEffect(() => {
    //     fetch(`${mainApi}/alltoy`)
    //         .then(res => res.json())
    //         .then(data => setToy(data))
    // }, [])

    const SportCarData = useGetToyData(`http://localhost:5000/toy/sportCar`)

    const MiniFireCarData = useGetToyData(`http://localhost:5000/toy/miniFire`)

    const PoliceCarData = useGetToyData(`http://localhost:5000/toy/policeCar`)
 
    

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Sport Car</Tab>
                    <Tab>Mini Fire</Tab>
                    <Tab>Police Car</Tab>
                </TabList>

                <TabPanel>
                {SportCarData?.length<1&&<Loader></Loader>}
                    <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {
                            SportCarData?.map(sport => {
                                // const { category, details, img, name, price, quantity, rating, seller, sellerImg } = sport
                                return <SingleToy sport={sport} key={sport?._id}></SingleToy>
                            })
                        }
                    </section>
                </TabPanel>
                <TabPanel>
                    <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {MiniFireCarData?.length<1&&<Loader></Loader>}
                        {
                            MiniFireCarData?.map(sport => {
                                // const { category, details, img, name, price, quantity, rating, seller, sellerImg } = sport
                                return <SingleToy sport={sport} key={sport?._id}></SingleToy>
                            })
                        }
                    </section>
                </TabPanel>
                <TabPanel>
                    <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {PoliceCarData?.length<1&&<Loader></Loader>}
                        {
                            PoliceCarData?.map(sport => {
                                // const { category, details, img, name, price, quantity, rating, seller, sellerImg } = sport
                                return <SingleToy sport={sport} key={sport?._id}></SingleToy>
                            })
                        }
                    </section>
                </TabPanel>
                
            </Tabs>

        </div>
    );
};

export default Toys;