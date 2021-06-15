import React, { useState } from 'react'
import { NavLink ,useHistory } from 'react-router-dom'
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();


    const loginUser = async (e)=>{
        e.preventDefault();
        const res = await fetch("/login",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
               email,
               password
            })
        });

        const data =await res.json();

        if(data.status===400|| !data){
            window.alert("Invalid Credential");
            console.log("Invalid Registration");

        }else{
           window.alert("Successful Login");
           console.log("Successful Login");
           history.push("/")

        }
    }
    return (
        <div>
            <div className="container">
                <div className="title">SignIn</div>
                <div className="content1">

                    <form method="POST">
                        <div className="user-details">
                            <div className="input-box1">
                                <span className="details">Email</span>
                                <input type="text" name="email"

                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email" required autoComplete="off" />

                            </div>

                            <div className="input-box1">
                                <span className="details">Password</span>
                                <input type="password" name="password"

                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password" required autoComplete="off" />

                            </div>

                        </div>

                        <div className="button form-group">
                            <input type="submit" className="signup" value="Login" onClick={loginUser} />
                        </div>
                    </form>
                    <div>Not registered? Go to <NavLink to="/signup" >Signup page</NavLink></div>
                </div>
            </div>
        </div>
    )
}

export default Login
