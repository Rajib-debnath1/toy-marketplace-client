import React from 'react';
import { toast } from 'react-toastify';
import { mainApi } from '../../shared/mainApi';

const ModalUpdate = ({sport,refetch}) => {

    const { category, details, img, name, price, quantity, rating, seller, sellerImg,_id } = sport

 
    const handleUpdate = event=> {
        event.preventDefault();
        const form = event.target;
        const priceU = form.price.value
        const ratingU = form.rating.value
        const quantityU = form.quantity.value
        const detailsU = form.details.value
        const data = {_id,priceU,ratingU,quantityU,detailsU}
        console.log(data,"upddate toy");
        fetch(`${mainApi}/updateToy`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    toast.success(`Added ${name}`)
                    refetch(_id)
                    // console.log(refetch,"refetch");
                }
            })
        

    }

    return (
        <div>
                     {/* main modal */}
                     <input type="checkbox" id={_id} className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <form onSubmit={handleUpdate}>
                                <h3 className="text-xl font-bold font-serif">Update {name}</h3>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input  type="text" 
                                    defaultValue={price}
                                    placeholder="price" name="price" className="input input-bordered" />
                                </div>


                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input  type="text" 
                                      defaultValue={rating}
                                    placeholder="rating" name="rating" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input  type="number" 
                                      defaultValue={quantity}
                                    
                                    placeholder="quantity" name="quantity" className="input input-bordered" />
                                </div>

                                <section className="block lg:flex justify-around gap-4">

                                    <div className="form-control w-full ">

                                        <label className="label">
                                            <span className="label-text">Details of Toys</span>
                                        </label>
                                        <textarea type="text" 
                                          defaultValue={details}
                                        placeholder="write details" name="details" className="input input-bordered" />
                                    </div>

                                </section>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Update Toy" />
                                </div>

                            </form>

                            {/*form close */}
                            <div className="modal-action">
                                <label htmlFor={ _id} className="btn">Close</label>
                            </div>
                        </div>
                    </div>
            
        </div>
    );
};

export default ModalUpdate;