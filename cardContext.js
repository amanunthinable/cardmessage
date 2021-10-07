import React from 'react';
  
const authContext = React.createContext({cardNumber:null,cardMessage:()=>{}});
  
export default authContext;