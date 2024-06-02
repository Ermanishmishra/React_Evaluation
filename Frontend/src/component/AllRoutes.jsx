import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";


export default function PrivateRoutes({children}){
    return children
}

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element = {
            <PrivateRoutes>
        <Home/>
        </PrivateRoutes>
        }/>
        <Route path="/login" element = {<Login/>}/>
        
        <Route path="/products/" element = {
            <PrivateRoutes>
        <Products/>
         </PrivateRoutes>
         }/>
    </Routes>
}