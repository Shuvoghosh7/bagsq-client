import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../fireabase.init';
import Loading from '../Shared/Loading/Loading';
import MyItemCard from './MyItemCard';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // const [MyProducts, setMyProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    /* useEffect(() => {
        const url = `https://bagsq.onrender.com/product?userEmail=${user?.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMyProducts(data);
                setIsLoading(false);
            });
    }, []); */
    const { data:MyProducts , isLoading, refetch } = useQuery('products', () => fetch(`https://bagsq.onrender.com/product?userEmail=${user?.email}`).then(res => res.json()))

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            {
                MyProducts.length === 0 ? (
                    <div className="text-5xl text-center font-extrabold uppercase text-gray-600 lg:my-32 mt-12">
                        <FontAwesomeIcon className="text-red-600" icon={faX} /> You Did't
                        Added Any Items{" "}
                        <FontAwesomeIcon className="text-red-600" icon={faX} />
                    </div>
                ) : (
                    <>
                        <h1 className="text-center my-10 text-xl font-bold">Products That You've Added</h1>
                        <div class="overflow-x-auto lg:mx-32 lg:mb-12 ">
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
                                                refetch={refetch}
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