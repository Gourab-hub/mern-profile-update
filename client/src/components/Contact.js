import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const Contact = () => {

    const history = useHistory();
    const [userData, setuserData] = useState({ name: "", email: "", phone: "", message: "" })

    const userContact = async () => {
        try {

            const res = await fetch('/getdata', {
                method: "GET",
                headers: {

                    "Content-Type": "application/json"
                },

            });
            const data = await res.json();
            console.log("data", data)
            // console.log("555555555555555555555555555555555555")
            // setuserData(data)

            setuserData({ ...userData, name: data.name, email: data.email, phone: data.phone })

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


    //we are storing data in
    const handelInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setuserData({ ...userData, [name]: value });

    }

    // send data backender

    const contactForm = async (e) => {
        e.preventDefault();

        const { name, email, phone, message } = userData;

        const res = await fetch('/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        })

        const data = await res.json();
        console.log("contact data", data)

        if (!data) {
            console.log("Nothing post");
           
        }
        else {
            alert("message send")
            setuserData({ ...userData, message: "" })
        }
    }


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

                    <form method="POST" className="justify-content-center">
                        <div className="d-flex justify-content-around input-box1">
                            <input type="text" className="m-2"
                                name="name"
                                value={userData.name}
                                onChange={handelInput}
                                placeholder="Name" required autoComplete="off" />
                            <input type="text" className="m-2"
                                name="email"
                                value={userData.email}
                                onChange={handelInput}
                                placeholder="Email" required autoComplete="off" />
                            <input type="text" className="m-2"
                                name="phone"
                                value={userData.phone}
                                onChange={handelInput}
                                placeholder="Password" required autoComplete="off" />

                        </div>
                        <div className="input-box1 d-flex justify-content-center p-2">
                            <textarea class="form-control" aria-label="With textarea"
                                name="message"
                                value={userData.message}
                                onChange={handelInput} placeholder="Message"></textarea>

                        </div>

                        <div className="button">
                            <input type="submit" className="signup"
                                onClick={contactForm} value="Login" />
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact