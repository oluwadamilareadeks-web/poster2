
import {useContext, useState} from "react"
import {ProductContext} from "../context/ProductContext"
const Create =()=>{
    // these data: products and setProducts are coming from our Product Content
  const{products, setProducts} = useContext(ProductContext);

    const [name, setName] =useState("");
    const [price, setPrice] =useState("");
    const [id, setId] =useState("");

    const [form, setForm] = useState({
        id : "",
        name : "",
        price: ""
    })
    function updateFormState(e){
              setForm({...form, [e.target.name] : e.target.value})
        }
    // a function that respond when a from is submitted
    function handle_submit(e){
        e.preventDefault();
        if(form.name== "" ||form.price == ""){
            alert("Please fill all the fields")
        }else{
            // generate a random id
            let id = Date.now();
            setForm({...form,id:id});
            // combine everything to form an object
           
        //    console.log(data)
        /// send what we cllect from the form to an api that will insert it into database. The api sends a response and we update our states
           setProducts([...products, form]);
           
        }
    }
        
    
    return(
        <div className="row">
            
                <div className="col-md-8 offset-md-2 pb-2">
                    <form onSubmit ={handle_submit}>
                        <input type="text" className="form-control pb-2" placeholder="product name" value ={form.name} onChange={updateFormState} name ="name" />
                        <input type="number" className="form-control pb-2" placeholder="product price" value ={form.price} onChange={updateFormState} name ="price"/>
                        <button className="btn btn-primary btn-sm">Add Product</button>
                    </form>
                </div>
        </div>
    )
}
export default Create