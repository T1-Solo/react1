import React from "react";
import "./style.css"
import App from "./App"
import  ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"))
let h1  = React.createElement("h1" , {style:{background: "red"} ,className:"salom"} , "Salom")
// Teg => Attribute => textContent
const Header = () =>{
    return (
        <div>
            <h1>Men headerman</h1>
        </div>
    )
}
const Main = () =>{
    return (
        <div>
            <h1>Men Mainman</h1>
        </div>
    )
}
const Footer = () =>{
    return (
        <div>
            <h1>Men footerman</h1>
        </div>
    )
}
root.render(
    <React.StrictMode>
        {h1}
        <Header/>
        <Main/>
        <Footer/>
        <App text ="1"/>
    </React.StrictMode>
)