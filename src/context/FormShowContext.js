import React, { createContext,useState} from "react";

export const FormShowContext = createContext();


function FormShowContextProvider({children}) {
    const [showForm,setShowForm] = useState(0);
    return (
        <FormShowContext.Provider value={{showForm,setShowForm}}>
            {children}
        </FormShowContext.Provider>
    )
}

export default FormShowContextProvider;
