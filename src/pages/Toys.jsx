
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useGetToyData from "../shared/usegetData";
import SingleToy from "./SingleToy";
import Loader from "../shared/Loader";
import { mainApi } from '../shared/mainApi';


const Toys = () => {
    // const [toy, setToy] = useState({})
    // useEffect(() => {
    //     fetch(`${mainApi}/alltoy`)
    //         .then(res => res.json())
    //         .then(data => setToy(data))
    // }, [])

    const {data:SportCarData} = useGetToyData(`${mainApi}/toy/sportCar`)

    const {data:MiniFireCarData} = useGetToyData(`${mainApi}/toy/miniFire`)

    const {data:PoliceCarData} = useGetToyData(`${mainApi}/toy/policeCar`)
 
    

    return (
        <div className="my-7 ">
            <h2 className="text-2xl font-serif font-bold text-center ">Our Best Toys </h2>
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