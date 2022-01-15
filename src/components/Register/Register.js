import React, { useState } from "react";

function Register() {

    //inicjalizacja stanu
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        email:'',
        name: '',
        password: '',
        passwordRep: ''
    });

    const updateField = e => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }

    const validate = form => {
        if(!form.email){
            return "E-mail is required.";
        }
        else if(!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/){
            return "E-mail is incorrect";
        }

        if(!form.name){
            return "Name is required.";
        }
        else if(form.name.length < 2){
            return "Name should be longer than 2 chars."
        }

        if(!form.password){
            return "Password is required.";
        }
        else if(form.password.length < 5){
            return "Password should be longer than 5 chars."
        }

        if(!form.passwordRep){
            return "Password is required.";
        }
        else if(form.passwordRep.length < 5){
            return "Password should be longer than 5 chars."
        }

        if(form.password !== form.passwordRep){
            return "Passwords do not match";
        }

        return null;
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        let errorMsg = validate(form);
        if(errorMsg){
            setError(errorMsg);
            console.log("error");

            return;
        }

        try{
            //zapis REST API usera...
            setError(null);
           // navigation.navigate("/home");
        }
        catch{
            setError("Error in registration..")
        }
    }


    function ErrorMsg(){
        if(error !== null){
         return <div className="alert alert-danger" role="alert">
                {error}
            </div>;
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                   {ErrorMsg()}
                    <div className='form-row'>
                        <div className="form-group">
                            <label id="EmailLabel" htmlFor="email">Email:</label>
                            <input className="form-control" type="text" id="email" aria-describedby="emailHelp" placeholder="example@example.com" onChange={updateField}></input>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label id="NameLabel" htmlFor="name">Name:</label>
                            <input type="text" id="name" className="form-control" aria-describedby="nameHelp" placeholder="ExampleNick"  onChange={updateField}></input>
                        </div>
                        <div className="form-group">
                            <label id="PasswordLabel" htmlFor="password">Password:</label>
                            <input type="password" id="password" className="form-control" onChange={updateField}></input>
                        </div>
                        <div className="form-group">
                            <label id="RepeatPasswordLabel" htmlFor="passwordRep">Repeat password:</label>
                            <input type="password" id="passwordRep" className="form-control" onChange={updateField}></input>
                        </div>
                    </div>
                    <hr></hr>
                    <button className="row btn btn-success"  type="submit">Create account</button>
                </div>
            </form>
        </div>
    )
}

export default Register;