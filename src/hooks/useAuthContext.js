import { useContext } from "react";
import { AuthContext } from "../ContextApi/auth/AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext);


    if(!context){
        throw Error('useAuthContext must be inside an AuthCostextProvider')
    } 

    return context;
}