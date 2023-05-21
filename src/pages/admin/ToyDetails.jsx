import { useLocation } from "react-router-dom";

const ToyDetails = () => {
    const {state} = useLocation()
    // console.log(state,"from details");
    const { category, details, img, name, price, quantity, rating, seller, sellerImg } = state
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