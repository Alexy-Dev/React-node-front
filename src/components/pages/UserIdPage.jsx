import React from 'react';
import NavBarUser from '../UI/NavBar/NavBarUser';
// import { useParams } from 'react-router-dom';

const UserIdPage = () => {
    // const params = useParams()
    // console.log(params)
    
    return (
        
        <div>
            {/* <h1>user {params.id}</h1> */}
            
            <NavBarUser/>
            
            
           {/* <h1 style={{textAlign: 'center', marginTop: '200px'}}>You are opened page of User!</h1> */}
           <div className='bottomline-use'></div>
        </div>
    );
};

export default UserIdPage;