import React from 'react';
import Heading from "../layout/Heading";
import LoginForm from "../layout/LoginForm";
import ErrorMessage from "../layout/ErrorMessage";



function Login() {
     return (
      <>   
     <Heading title = "Login"/>   
     <LoginForm />
     <ErrorMessage />
     </>
     
     );
  
}

export default Login;