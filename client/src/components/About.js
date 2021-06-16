import React ,{useEffect,useState} from 'react'
import gourab from '../image/gourab.jpeg'
import { useHistory } from 'react-router-dom'


const About = () => {

    const history = useHistory();
    const [userData, setuserData] = useState('')

    const callAboutPage = async ()=>{
        try {
            
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
               credentials:"include"
            });
            const data = await res.json();
            console.log("data",data)
            // console.log("555555555555555555555555555555555555")
            setuserData(data)
            if (!data.status === 200 ) {
                const error  = new Error(res.error);
                throw error;
            } 
        } catch (err) {
            console.log(err);
            history.push("/login");  
        }
    }

    useEffect(() => {
      callAboutPage();
    },[]);


    return (
        <>
            <div className="container ">
            <form method="GET">
                <div className="row">
                    <div className="col-md-4">
                        <img className="profilepic" src={gourab} />
                    </div>

                    <div className="col-md-6">
                        <div>
                            <h3>{userData.name}</h3>
                            <h4>{userData.work}</h4>
                            <p className="">RANKINGS <span>1/10</span></p>


                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link " id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                </li>

                            </ul>


                            <div className="col-md-12 pl-5">
                                <div className="tab-content profile-tab " id="myTabContent">

                                    <div className="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label >User ID</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData._id}</p>
                                            </div>


                                            <div className="col-md-6">
                                                <label >Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.name}</p>
                                            </div>



                                            <div className="col-md-6">
                                                <label >Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.email}</p>
                                            </div>


                                            <div className="col-md-6">
                                                <label >Phone </label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.phone}</p>
                                            </div>

                                            <div className="col-md-6">
                                                <label >Professon</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.work}</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade show active " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label >Experience </label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>


                                            <div className="col-md-6">
                                                <label >Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/</p>
                                            </div>

                                            <div className="col-md-6">
                                                <label >Total Project</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>


                                            <div className="col-md-6">
                                                <label >English Level </label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>

                                            <div className="col-md-6">
                                                <label >Avoilobility</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 month</p>
                                            </div>
                                        </div>

                                    </div>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-button" />
                    </div>

                </div>
</form>
            </div>
        </>
    )
}

export default About
