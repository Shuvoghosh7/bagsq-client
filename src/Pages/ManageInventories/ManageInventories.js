import {
    faChevronLeft,
    faChevronRight,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import useProducts from "../../Hooks/useProducts";
import TableRow from "./TableRow";
import { Zoom } from "react-reveal";
import Loading from "../Shared/Loading/Loading";

const ManageInventories = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        setIsPageLoading(true);
        const url = `http://localhost:5000/product`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setIsLoading(false);
                setIsPageLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className='lg:mx-40 mt-10'>
            <h1 className="text-center my-5 text-xl font-bold">All Inventories</h1>

            <div class="overflow-x-auto">
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
                            products?.map((product, index) =>
                                <TableRow
                                    key={product._id}
                                    product={product}
                                    index={index}
                                />
                            )
                        }

                    </tbody>
                </table>

            </div>
            <div className="my-5 mb-12 text-center">
                <Link
                    to="/addinventory"
                    className="bg-blue-300 py-2 px-10 rounded-full font-semibold text-gray-600"
                >
                    Add Inventory <FontAwesomeIcon icon={faPlus} />
                </Link>
            </div>

        </div>
    );
};

export default ManageInventories;