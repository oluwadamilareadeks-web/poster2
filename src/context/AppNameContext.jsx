

// create a context

import { createContext } from "react";

// stage onecreate a context
export const AppNameContext =createContext();

// stage two: create a provider : a provider is a super component that can provide any component that are its children with whatever he has
export const AppNameProvider= ({children}) =>{
    const appName ="Invento App"
    //state
    // method to update
            return( <AppNameContext.Provider value={{appName:appName}}>
                        {children}
            </AppNameContext.Provider>)
}