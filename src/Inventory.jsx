import Create from "./inventory_components/Create";
import Products from "./inventory_components/Products";
import {useContext, useState} from "react";
import { AppNameContext } from "./context/AppNameContext";
import {ProductContext} from "./context/ProductContext"
 const Inventory =()=>{
    // how to use context
    const {appname} = useContext(AppNameContext);// which content do you want to use
    const {products} = useContext(ProductContext);
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12  text-center pt-5">
                    <h1>{appname}</h1>
                    <h4>Total Product : {products.length}</h4>
                </div>
            </div>
            {/* other components goes here */}
            <Create  />
            <Products  />

        </div>
    )
}
export default Inventory