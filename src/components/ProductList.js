import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const ProductList = ({products,productColumns}) => {
    const[modal, setModal] = useState(false)

    return ( 
        <div className="container mx-auto my-6  bg-white rounded-lg ">
            <div className="flex justify-between p-5 mt-5 items-center">
                <div><span className="text-xl font-medium">Products</span></div>
                <div className="flex justify-end items-center">
                    <label className="text-lg items-center mr-3"><input type="checkbox" className="w-4 h-4 rounded mr-2"/>Hide Expired Product</label>

                    
                    <button className="rounded-lg bg-light-purple p-3 text-white font-medium cursor-pointer hover:bg-dark-grey mx-3">Add New Product</button>
                    
                </div>
            </div>
            <div className="rounded-t-3xl overflow-hidden p-6">
                <table className="table-auto">
                    <thead>
                        <tr className="bg-slate-100 text-base">
                        {productColumns.map((column) => (
                            
                                <th key={column.id}  className="px-4 py-5 text-slate-600">{column.title}</th>
                            
                            ))
                        }
                        </tr>
                    </thead>
                    <tbody>
                        { products.map((item)=> (
                            
                            <tr key={item.id} >
                                <td className="border-b-4 border-slate-100 px-2  py-4  font-medium "><img src={item.image} alt="img" className="h-20 w-20 rounded-full " /></td>
                                <td className="border-b-4 border-slate-100 px-4  py-4  font-medium hover:text-light-purple"><Link to={'/products/'+item.id}>{item.name}</Link></td>
                                <td className="border-b-4 border-slate-100 px-4 py-4 font-medium">{item.description}</td>
                                <td className="border-b-4 border-slate-100 px-4 py-4 font-medium">{item.price}</td>
                                <td className="border-b-4 border-slate-100 px-4 py-4 font-medium">{item.category}</td>
                                <td className="border-b-4 border-slate-100 px-4 py-4 font-medium">{item.expiryDate}</td>
                                <td className="border-b-4 border-slate-100  "><Link to={'/products/delete/'+item.name}>
                                <BsFillTrashFill className="text-5xl text-right ml-4 bg-light-blue px-2 rounded-full hover:bg-light-purple"/></Link>
                                </td>
                                
                            </tr>
                        ))}
                        
                    
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
    productColumns: PropTypes.array,
}
 
export default ProductList;