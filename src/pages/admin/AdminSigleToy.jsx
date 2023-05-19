import { useNavigate } from "react-router-dom";
import { mainApi } from "../../shared/mainApi";
import { toast } from "react-toastify";
import ModalUpdate from "./ModalUpdate";


const AdminSingleToy = ({ sport,refetch }) => {
    const { category, details, img, name, price, quantity, rating, seller, sellerImg,_id } = sport
    const handleDelete = data => {
        fetch(`${mainApi}/deleteToy`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    toast.success(`Deleted ${name}`)
                    refetch(_id)
                }
            })
    }

    

    return (
        <div className="bg-slate-200 shadow-xl rounded-lg flex flex-col" key={name}>
            <img src={img} className="h-[200px] w-[90%] mx-auto rounded" alt="image" />
            <aside className="p-3 ">
                <h3 className="font-bold text-2xl text-center font-serif">{name}</h3>
                <div className="flex justify-between p-3 font-mono">
                    <h5> Price :{price} TK </h5>
                    <h5>Rating: {rating}</h5>

                    <h5 className="">Quantity: {quantity} pcs</h5>
                </div>

                
                <section className="flex justify-between">
                    {/* <button
                    onClick={() => handleUpdate(sport)}

                    className="bg-green-700 p-3 text-white font-bold rounded-md text-center ">Update</button> */}

                    {/* Modal button */}

                    <label htmlFor={_id} className="btn btn-success">Update</label>
                    {/* Put this part before </body> tag */}

                    <ModalUpdate sport={sport} key={_id} refetch={refetch}></ModalUpdate>

       



{/* delte toy */}
                    <button
                        onClick={() => handleDelete(sport)}

                        className="bg-red-700 p-3 text-white font-bold rounded-md text-center ">Delete</button>
                </section>
            </aside>
        </div>
    );
};

export default AdminSingleToy;