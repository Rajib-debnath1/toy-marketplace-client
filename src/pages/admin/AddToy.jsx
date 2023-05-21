import { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider";
import { mainApi } from "../../shared/mainApi";
import { toast } from "react-toastify";
import useTitleRoutes from "../../shared/hooks/useTittle";


const AddToy = () => {
    useTitleRoutes("AddToys")
    const { user } = useContext(AuthContext)
    // console.log(user, "addToy");
    // The toy is very joyfull for kids and baby .

    const handeToyData = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const category = form.category.value
        const img = form.img.value
        const price = form.price.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const details = form.details.value

        const data = {
            name, category, img, price, rating, quantity, details, seller: user?.email
            , sellerImg: user?.photoURL
        }
        // console.log(data);
        fetch(`${mainApi}/addToy`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then(data=>{
                console.log(data);
                if(data){
                    toast.success(`Added ${name}`)
                }
            })


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" mr-12 w-1/2">
                        <img src='https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-798.jpg?w=740&t=st=1684480344~exp=1684480944~hmac=439a0c51dbe6accea4626f2b3ea0c54376caf7b0ca99a4ec18c55c67f6f68461' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Add a Toys </h1>

                            <form
                                onSubmit={handeToyData}
                            >
                                <section className="block lg:flex justify-around gap-4">

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                      
                                        <select required name="category" className="input input-bordered"  id="">
                                            <option value="sportCar" >Sport Car</option>
                                            <option value="miniFire" defaultValue> Mini Fire</option>
                                            <option value="policeCar"> Police Car</option>
                                        </select>
                                    </div>



                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input required type="text" placeholder="Name" name="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Photo</span>
                                        </label>
                                        <input required type="url" placeholder="paste url" name="img" className="input input-bordered" />
                                    </div>

                                </section>

                                <section className="block lg:flex justify-around gap-4">

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input required type="text" placeholder="price" name="price" className="input input-bordered" />
                                    </div>


                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input required type="text" placeholder="rating" name="rating" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input required type="number" placeholder="quantity" name="quantity" className="input input-bordered" />
                                    </div>

                                </section>



                                <section className="block lg:flex justify-around gap-4">

                                    <div className="form-control w-full ">

                                        <label className="label">
                                            <span className="label-text">Details of Toys</span>
                                        </label>
                                        <textarea required type="text" placeholder="write details" name="details" className="input input-bordered" />
                                    </div>

                                </section>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Add Toy" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddToy;