import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorMessage from "./ErrorMessage";


const schema = yup.object().shape({
    userName: yup.string().required("Username is required"),
    passWord: yup.string().required("Password is required")
   
});

function LoginForm() {
        const { register, handleSubmit, errors } = useForm({validationSchema: schema
  });
    
    function onSubmit(data) {
        console.log("data", data);
    }
    
    return (
        
          <form onSubmit={handleSubmit (onSubmit)}>
        
             <input name="userName" placeholder="Username" ref={register({required: true })} />
             {errors.userName && <ErrorMessage>{errors.userName.message}Please enter valid username</ErrorMessage>
            
            }
                                                          
             <input name="passWord" placeholder="Password" ref={register({required: true, minLength: 4, maxLength: 12 }) } />
             {errors.passWord && <ErrorMessage>{errors.passWord.message}Password must be more than 4 characters.</ErrorMessage>
            
            }
            
           <input type="submit" />
       </form>                                                        
    );
         
}


export default LoginForm;