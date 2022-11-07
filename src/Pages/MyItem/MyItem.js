import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../fireabase.init';
import Loading from '../Shared/Loading/Loading';
import MyItemCard from './MyItemCard';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [MyProducts, setMyProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const url = `http://localhost:5000/product?userEmail=${user?.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMyProducts(data.data);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            {
                MyProducts.length === 0 ? (
                    <div className="text-5xl text-center font-extrabold uppercase text-gray-600 lg:mt-56 mt-12">
                        <FontAwesomeIcon className="text-red-600" icon={faX} /> You Did't
                        Added Any Items{" "}
                        <FontAwesomeIcon className="text-red-600" icon={faX} />
                    </div>
                ) : (
                    <>
                        <h1 className="text-center my-10 text-xl font-bold">Products That You've Added</h1>
                        <div class="overflow-x-auto lg:mx-32 ">
                            <table class="table table-zebra w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>PRODUCT IMAGE</th>
                                        <th>PRODUCT NAME</th>
                                        <th>PRICE</th>
                                        <th>QUANTITY</th>
                                        <th>SUPPLIER</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        MyProducts?.map((product, index) =>
                                            <MyItemCard
                                                key={product._id}
                                                product={product}
                                                index={index}
                                            />
                                        )
                                    }

                                </tbody>
                            </table>

                        </div>


                    </>

                )

            }


        </div>
    );
};

export default MyItem;