import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Product = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { img, name, price } = product;
    // console.log(product)
    const handleAddCart = () => {
        const productInfo = {
            img,
            name,
            price,
            email: user.email
        }
        console.log(productInfo);
        fetch('http://localhost:5000/addcart', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // console.log(data);
                    toast.success('Successfully add cart!')
                    // refetch();
                }
                else {
                    toast.error(data.message)
                }

            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className=" flex justify-center items-center">

                    <figure><img className='w-[250px] h-[250px] mt-5' src={img} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>

                    <p>${price}</p>
                    <div className="card-actions flex justify-end">
                        {/* <button onSubmit={handleAddCart}>add to cart</button> */}
                        <input onClick={handleAddCart} className="btn btn-outline btn-secondary sm:btn-sm md:btn-md" type="submit" value="Add to cart" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;