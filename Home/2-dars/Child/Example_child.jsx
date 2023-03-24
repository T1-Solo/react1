import "./Example.css"
export const  Example_child = () =>{
    const [emailText  ,setEmailText] = useState("")
    const [passwordText  ,setPasswordText] = useState("")
    const handleSub = (event) => {
        event.preventDefault()
    }
    const handleChange = (event) =>{
        let re =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        switch(event.target.id){
            case "email ":{
                if(re.test(event.target.value) !== true){
                    setEmailText("Email xato")
                }else {
                    setEmailText("")
                }
            }break;
            case "password" :{
                if(event.target.value.length > 3 && event.target.value.length < 8){
                    setPasswordText("")
                }else {
                    setPasswordText("password 3dan katta va 8dan kichik bolishi zarur")
                }
            }break;
            default : return false 
            
        }
    }
    return (
        <>
        <form onSubmit={handleSub}>
            <input onChange={handleChange} id="email" type="email" />
            {emailText !== ""?  <p>{emailText}</p> : false}
            <input type="password" onChange={handleChange} id="password" />
            {passwordText !== ""?  <p>{passwordText}</p> : false}
            <button type="submit">Submit</button>
        </form>
        </>
    )
}