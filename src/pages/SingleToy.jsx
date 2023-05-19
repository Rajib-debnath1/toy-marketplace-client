import { useNavigate } from "react-router-dom";


const SingleToy = ({ sport }) => {
    const { category, details, img, name, price, quantity, rating, seller, sellerImg } = sport
    const navigate = useNavigate()
    const handleDataNavigate = data =>{
        console.log(data);
        navigate('/detailToy',{state:data})
        // navigate()
    }
    return (
        <div className="bg-slate-200 shadow-xl rounded-lg flex flex-col" key={sport?._id}>
            <img src={img} className="h-[200px] w-[90%] mx-auto rounded" alt="image" />
            <aside className="p-3 ">
                <h3 className="font-bold text-2xl text-center font-serif">{name}</h3>
                <div className="flex justify-between p-3 font-mono">
                    <h5> Price :{price} TK </h5>
                    <h5>Rating: {rating}</h5>

                    <h5 className="">Quantity: {quantity} pcs</h5>
                </div>
                    <h5 className="ml-2">Seller: {seller}</h5>
                    <h5 className="ml-2">Sub Category: {category}</h5>
                <button
                    onClick={() => handleDataNavigate(sport)}

                    className="bg-blue-700 p-3 text-white font-bold rounded-md text-center ">See Details</button>
            </aside>
        </div>
    );
};

export default SingleToy;