import React, { useEffect, useState } from 'react'


const Home = () => {


    const [userData, setuserData] = useState('');
    const [show, setShow] = useState(false)

    

    const UserHomePage = async () => {
        try {

            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                   
                    "Content-Type": "application/json"
                },
            
            });
            const data = await res.json();
            console.log("data", data)

            setuserData(data.name)
            setShow(true)
            if (!data.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        UserHomePage();
    }, []);






    return (
        <>
        <center>
        <div className="container-home">
                <div>
                    <p className="container-home-p">WELCOME</p>
                    <h1 className="container-home-h1">{userData}</h1>
                    <h2 className=" mt-5">{show ?'Happy to see you again':'We are the MERN developer'}</h2>
                </div>
            </div>
        </center>
     
        </>
    )
}

export default Home
