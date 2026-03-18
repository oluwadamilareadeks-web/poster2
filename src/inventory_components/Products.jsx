
import {useContext} from "react"
import {ProductContext} from "../context/ProductContext"
const Products =()=>{
    const{products, delete_product} = useContext(ProductContext)
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12  text-center pt-5">
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            products.length >0 && products.map((pro, index)=>{
                                 return  ( <tr key={index}>
                                    <td>{pro.name}</td>
                                    <td>{pro.price}</td>
                                    <td><button className="btn btn-danger btn-sm" onClick={()=>{delete_product(pro.id)}}>Delete</button></td>
                                </tr>
                                )
                            }) 
                           }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default Products