import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import swal from 'sweetalert';

const MyItemCard = ({product, index,refetch}) => {
    const { productName, imageUrl, quantity, price, supplierName, _id } = product;

    const handealDelete = () => {
        const url = `https://bagsq.onrender.com/product/${_id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                swal("Good job!", "Your Product Delete Successfully !", "success");
                refetch()
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={imageUrl} />
                    </div>
                </div>
            </td>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{supplierName}</td>
            <td>
                <div>
                    <button className='text-xl text-red-600' onClick={handealDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </td>

        </tr>
    );
};

export default MyItemCard;