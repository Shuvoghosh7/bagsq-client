import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../fireabase.init";
import bagsq from "../../Images/BagsQ.png";
import { Zoom } from "react-reveal";
import swal from "sweetalert";

const AddInventory = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = (data) => {
        fetch('https://bagsq.onrender.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                swal("Good job!", "Your Product Add Successfully !", "success");
            })
    }
    return (
        <Zoom left>
            <div className="px-4">
                <form
                    className="flex flex-col mx-auto justify-center lg:w-1/2 w-full lg:p-24 p-5 my-8 rounded-2xl shadow-lg"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="w-full mt-2 mb-6">
                        <img className="w-3/5 mx-auto" src={bagsq} alt="" />
                    </div>
                    <h2 className="text-center text-2xl font-bold text-blue-400 uppercase mb-4">
                        Please Add Your Item
                    </h2>

                    <label>Enter Your Email</label>
                    <input
                        type="email"
                        value={user?.email}
                        className="border py-2 px-5 mb-4 rounded-lg"
                        {...register("userEmail", { required: true })}
                    />

                    <label>Product Name</label>
                    <input
                        className="border py-2 px-5 mb-4 rounded-lg"
                        {...register("productName", { required: true })}
                    />

                    <label>Description</label>
                    <textarea
                        className="border py-2 px-5 mb-4 rounded-lg"
                        {...register("description", { required: true })}
                    />

                    <label>Supplier Name</label>
                    <input
                        className="border py-2 px-5 mb-4 rounded-lg"
                        {...register("supplierName", { required: true })}
                    />

                    <label>Price</label>
                    <input
                        className="border py-2 px-5 mb-4 rounded-lg"
                        type="number"
                        {...register("price", { required: true })}
                    />

                    <label>Quantity</label>
                    <input
                        className="border py-2 px-5 mb-4 rounded-lg"
                        type="number"
                        {...register("quantity", { required: true })}
                    />

                    <label>Image</label>
                    <input
                        className="border py-2 px-5 mb-4 rounded-lg"
                        {...register("imageUrl", { required: true })}
                    />

                    <div className="flex justify-center">
                        <input
                            className="border py-2 lg:px-14 px-6 mb-4 mr-2 rounded-lg cursor-pointer bg-blue-300"
                            type="submit"
                        />
                        <input
                            onClick={() => {
                                reset();
                            }}
                            className="border py-2 lg:px-14 px-6 mb-4 ml-2 rounded-lg cursor-pointer bg-blue-300"
                            type="reset"
                        />
                    </div>
                </form>
            </div>
        </Zoom>
    );
};

export default AddInventory;