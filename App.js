
import React, { useState } from "react";
import Card from "./Card";
import authContext from "./cardContext";  
const App = () => {
  //using the state to dynamicallly pass the values to the context
  
  const [cardNumber, setCardNumber] = useState(null);
  const [cardMessages, setCardMessages] = useState(null);

  const cardMessage = (val) => {
    setCardMessages(val)
  };

  return (
    <React.Fragment>
      <authContext.Provider value={{ cardNumber,setCardNumber, cardMessage: cardMessage }}>
        <Card/>
        {cardNumber !== null && <p style={{marginLeft:"10px"}}>Card Number:{cardNumber}</p> }
        {cardMessages !== null && <p style={{marginLeft:"10px"}}> Card Message:{cardMessages}</p>}
      </authContext.Provider>
    </React.Fragment>
  );
};
export default App;
