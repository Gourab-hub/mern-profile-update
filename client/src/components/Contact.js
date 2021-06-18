import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const Contact = () => {

    const history = useHistory();
    const [userData, setuserData] = useState('')

    const userContact = async () => {
        try {

            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                   
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            console.log("data", data)
            // console.log("555555555555555555555555555555555555")
            setuserData(data)
            if (!data.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            history.push("/login");
        }
    }

    useEffect(() => {
        userContact();
    }, []);




    return (
        <>


            <div class="container ">
                <div class="row d-flex justify-content-between">
                    <div class="col-sm">
                        <div class="card">

                            <div class="card-body">
                                <h5 class="card-title"><i class="fa fa-phone" aria-hidden="true"></i> Phonet</h5>
                                <p class="card-text"><span>+91</span>{userData.phone}</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card">

                            <div class="card-body">
                                <h5 class="card-title"><i class="fa fa-envelope" aria-hidden="true"></i> Email</h5>
                                <p class="card-text">{userData.email}</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card">

                            <div class="card-body">
                                <h5 class="card-title"><i class="fa fa-address-card-o" aria-hidden="true"></i> Address</h5>
                                <p class="card-text">Coochbehar</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="container">
                <div className="title">Get In Touch</div>
                <div className="content p-2">

                    <form action="#" className="justify-content-center">
                        <div className="d-flex justify-content-around input-box1">
                            <input type="text" className="m-2"
                            value={userData.name}
                             placeholder="Name" required autoComplete="off" />
                            <input type="text" className="m-2"
                            value={userData.email}
                             placeholder="Email" required autoComplete="off" />
                            <input type="text" className="m-2"
                            value={userData.phone}
                             placeholder="Password" required autoComplete="off" />

                        </div>
                        <div className="input-box1 d-flex justify-content-center p-2">
                            <textarea class="form-control" aria-label="With textarea" placeholder="Message"></textarea>
                        </div>

                        <div className="button">
                            <input type="submit" className="signup" value="Login" />
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact
