import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// import Calc from '../../../services/calc';
import './main.css';
import AppService from '../../../services/AppService';

const Main = () => {
const [value, setValue] = useState('Enter your email')
const Calc = async () => {    
    const res = await AppService.getAllUserInfo(); 
    // const respo = await AppService.getAllAll();
    // const groups = respo.data.concat(res.data);
    console.log(res);    
    // console.log(respo);
    // console.log(groups);  
}

    return(
        <div className="main">
            <div className="top"></div>
            <h3 className="title">
                <Link to='/'>
                AppCo
                </Link>
            </h3>
            <button onClick={() => Calc()} >Push</button>
            {/* <button onClick={Calc}>Push</button> */}
            
		
            <div className="head">
                <h3 className="headtitle"> <big>Brainstorming</big> for desired perfect Usability</h3>
            
                <p>
                    Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
                </p>
                <button>                
                        <Link to='/users'>Users</Link>                
                </button>
            </div>
            <div className="mobile">
                <div className="mobilebox"></div>
            </div>
		

            <section className="section">
                <h4>Why <big>small business owners love</big> AppCo?</h4>
                <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>

                <ul className="grid">
                    <li>
                        <i className="pic1"></i>
                        <h4>Clean Design</h4>
                        <p>Increase sales by showing true dynamics of your website.</p>
                    </li>
                    <li>
                        <i className="pic2"></i>
                        <h4>Secure Data</h4>
                        <p>Build your online store’s trust using Social Proof & Urgency.</p>
                    </li>
                    <li>
                        <i className="pic3"></i>
                        <h4>Retina Ready</h4>
                        <p>Realize importance of social proof in customer’s purchase decision.</p>
                    </li>
                </ul>
                <div className="youremail" style={{flexDirection: 'row', display: 'flex'}}>
                <input className="youremail_input" type='email' value={value} onChange={event => setValue(event.target.value)}></input>
                <button className="youremail_btn" onClick={() => console.log(value)}>Subscribe</button>
                </div>
                
            </section>
            {/* <output className="youremail"placeholder="Enter your email"><button>Subscribe</button></output> */}
	
            <div className="down"></div>
        </div>
    )
}
export default Main;