import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Bank from './Bank.jsx'
import Blogger from "./Blogger.jsx"
import Inventory from "./Inventory.jsx"
//import provider
import {AppNameProvider} from "./context/AppNameContext.jsx"
import {ProductProvider} from "./context/ProductContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppNameProvider>
      <ProductProvider>
        {/* <Meal /> */}
    <Inventory/>
    
    {/* <App /> */}
    {/* <Bank /> */}
    </ProductProvider>
    {/* <Blogger /> */}
    </AppNameProvider>
  </StrictMode>,
  // <div>
  //   <h1 className='text-success bg-primary'>Hello World</h1>
  //   <p>Greetings From Mars</p>
  // </div>
  
)
