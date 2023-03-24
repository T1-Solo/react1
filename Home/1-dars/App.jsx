import { useState } from "react"
const App = ({text}) =>{
    let [boshlangich , uzgartirilgan] = useState(1)
    console.log(text)
    // const {text} = props
    const handleClick = (event) =>{
       switch(event.target.id){
        case "qushish":{
            uzgartirilgan(() => boshlangich++)
        }break;
        case "ayir" :{
            if(boshlangich > 1){
                uzgartirilgan(() => boshlangich--)
            }
        }break
        case "nol" :{
            uzgartirilgan(boshlangich = 0)
        }
       }
    }
    return (
        <div>
            <h1>{text}</h1>
            <button onClick={handleClick}id="qushish" >+</button>
            <button onClick={handleClick} id="ayirish" >-</button>
            <button onClick={handleClick} id="nol">default</button>
        </div>
    )
}

export default App;