import React,{useState} from 'react'
import { useContext } from 'react'
import authContext from './cardContext';
import CardData from './cardData';


const Card = () => {
const [message,setMessage] = useState("");
    const {cardMessage,cardNumber,setCardNumber} = useContext(authContext);
    const handleChange=(e)=>{
        setMessage(e.target.value)
    }

    return (
        <div style={{display:"flex"}}>
        {CardData.map((value)=>{
            return(
                <>
                <div style={{height:"300px",width:"300px",border:"2px solid black",borderRadius:"4px",margin:"10px 10px 0px 10px "}}>
                    <h4 style={{textAlign:"center"}}>{value.title}</h4>
                <input type="text" style={{marginTop:"14px",marginLeft:"10px"}} onChange={handleChange} />
            <button style={{color:"white",backgroundColor:"blue",marginLeft:"10px"}} onClick={()=>{cardMessage(message);setCardNumber(value.title)}}>Send</button>
            </div>
                </>
            )
        })}
       </div>
    )
}

export default Card
