import { Link, useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const SingleToy = ({ sport }) => {
    const { category, details, img, name, price, quantity, rating, seller, sellerImg ,_id} = sport
    const navigate = useNavigate()
    const handleDataNavigate = data =>{
        console.log(data);
        navigate('/detailToy',{state:data})
        // navigate()
    }
    return (
        <div data-aos="fade-up" className="bg-slate-200 shadow-xl rounded-lg flex flex-col" key={sport?._id}>
            <img src={img} className="h-[200px] w-[90%] mx-auto rounded" alt="image" />
            <aside className="p-3 ">
                <h3 className="font-bold text-2xl text-center font-serif">{name}</h3>
                <div className="flex justify-between p-3 font-mono">
                    <h5> Price :{price} TK </h5>
                    <h5>Rating: {rating}</h5>

                    <h5 className="">Quantity: {quantity} pcs</h5>
                </div>
                   <div className="my-3">
                   <h5 className="text-sm font-mono">Seller: {seller}</h5>
                    <h5 className="text-sm font-mono">Sub Category: {category}</h5>
                   </div>
                <Link
                    // onClick={() => handleDataNavigate(sport)}
                    to={`/detailToy/${_id}`}

                    className="bg-blue-700  px-3 py-2 text-white font-bold rounded-md text-center ">See Details</Link>
            </aside>
        </div>
    );
};

export default SingleToy;