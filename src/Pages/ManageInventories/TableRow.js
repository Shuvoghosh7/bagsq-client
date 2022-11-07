import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TableRow = ({product, index}) => {
    const { productName, description, imageUrl, quantity, price, supplierName, _id } = product;
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
                    <button className='text-xl text-red-600'>
                    <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </td>

        </tr>
    );
};

export default TableRow;