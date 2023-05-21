import { useLoaderData} from "react-router-dom";
import useTitleRoutes from "../../shared/hooks/useTittle";

const ToyDetails = () => {
    // const data = useLocation()

    // const state = data?.state;

    useTitleRoutes("Details")
    
    const data = useLoaderData()
    console.log(data,"get data details");
    
    // console.log(state);


    // console.log(data);
    
    // console.log(state,"from details");
    const {  details, img, name, price, quantity, rating } = data

    return (
        <div className="w-[90%] block lg:flex justify-between mx-auto shadow-xl">
            <section>
            <h3 className="text-xl font-bold text-center">{name}</h3>
            <img src={img} className="h-[300px] rounded" alt="" />
            </section>
            <aside className="p-3 shadow-2xl">
                <h3 className="font-bold text-2xl text-center font-serif">{name}</h3>
                <div className="flex justify-between p-3 font-mono">
                    <h5> Price :{price} TK </h5>
                    <h5>Rating: {rating}</h5>

                    <h5 className="">Quantity: {quantity} pcs</h5>
                </div>
                <p className="text-sm  text-blue-700 ">{details}</p>
                </aside>


            
        </div>
    );
};

export default ToyDetails;