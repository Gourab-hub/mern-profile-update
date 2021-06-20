import React,{useState} from 'react'
import { NavLink , useHistory } from 'react-router-dom'



const Signup = () => {

    const history = useHistory();

    
    const [user, setUser] = useState({
        name:"",email:"", phone:"", work:"", password:"", cpassword:""
    });

    let name,value;
    const handleInputs =(e)=>{
        console.log(e);
        name = e.target.name;
        value= e.target.value;
        setUser({...user,[name]:value})
    }



    const PostData = async (e)=>{

        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;
         const res = await fetch("/registration",{
             method: "POST",
             headers :{
                 "Content-Type": "application/json"
             },
             body:JSON.stringify({
                name, email, phone, work, password, cpassword 
             })
         });

         const data =await res.json();
         if(data.status===422 || !data){
             window.alert("Invalid Registration");
             console.log("Invalid Registration");

         }else{
            window.alert("Successful Registration");
            console.log("Successful Registration");
            history.push("/login")

         }
    }

    return (
        <>
            <div className="container">
                <div className="title">Registration</div>
                <div className="content">

                    <form method="POST">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text" name="name" placeholder="Enter your name" required
                                value={user.name}
                                onChange={handleInputs}
                                autoComplete="off" />
                            </div>
                        
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" name="email" placeholder="Enter your email" required
                                value={user.email}
                                onChange={handleInputs}
                                autoComplete="off" />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="number" name="phone" placeholder="Enter your number" required
                                value={user.phone}
                                onChange={handleInputs}
                                autoComplete="off" />
                            </div>
                            <div className="input-box">
                                <span className="details">Your Work</span>
                                <input type="text" name="work" placeholder="Work" required
                                value={user.work}
                                onChange={handleInputs}
                                autoComplete="off" />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="password" name="password" placeholder="Enter your password" required
                                value={user.password}
                                onChange={handleInputs}
                                autoComplete="off" />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input type="password" name="cpassword" placeholder="Confirm your password" required
                                value={user.cpassword}
                                onChange={handleInputs}
                                autoComplete="off" />
                            </div>
                        </div>
                        
                        <div className="button form-group">
                            <input type="submit" className="signup" value="Register" onClick={PostData}    />
                        </div>
                    </form>
                    <div>Already registered? Go to <NavLink to="/login" >Login page</NavLink></div>
                </div>
            </div>



        </>
    )
}

export default Signup
