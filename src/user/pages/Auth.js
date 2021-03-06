import React from 'react';

import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './Auth.css';

const Auth = () => {
    const [formState, inputHandler] = useForm ({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        },
     }, false );

     const authSubmitHandler = event => {
         event.preventDefault();
         console.log(formState.inputs);
     }

    return <Card className="authentication">    
     <h2>Login required</h2>
     <hr />
     <form onSubmit={authSubmitHandler}> 
        <Input
        element="input"
        id="email"
        type="email"
        label="E-mail" 
        validators={[VALIDATOR_EMAIL ()]}
        errorText="Please enter a valid e-mail address."
        onInput={inputHandler}
        />
        <Input
        element="input"
        id="password"
        type="password"
        label="Password" 
        validators={[VALIDATOR_MINLENGTH (6)]}
        errorText="Please enter a valid password, at least 6 charts."
        onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>LOGIN</Button>
    </form>
    </Card>

};

export default Auth;