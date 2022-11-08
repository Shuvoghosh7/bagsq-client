import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
const Products = () => {
  const [products, setProducts] = useState([]);
  // const limitedProducts = products?.slice(0, 6);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = `https://bagsq.onrender.com/product`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setIsLoading(false);
      });
  }, [products]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="py-14 flex flex-col justify-center min-h-screen">
      <div className="text-center mt-10">
        <span className="text-center text-2xl font-bold">Products </span>
        <span className="text-center text-2xl font-bold text-blue-400">
          Clients Have
        </span>
      </div>

      {/* <------------------------->mapping all products<-------------------------> */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 lg:px-28 pt-5">
        {products?.slice(0, 6).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <Link
        className="bg-teal-100 hover:bg-blue-300 py-1 w-1/2 lg:w-1/6 mx-auto my-3 rounded text-center"
        to="/manageInventories"
      >
        Manage Inventories
      </Link>
    </div>
  );
};

export default Products;