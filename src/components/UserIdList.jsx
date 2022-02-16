import React from 'react';
import UserIdItem from './UserIdItem';


const UserIdList = ({user}) => {
    // if (!user.length) {
    //     return (
    //         <h1 style={{textAlign: 'center'}}>User is not found</h1>
    //     )
    // }
    return (
        <>            
           <UserIdItem user={user}/>            
        </>        
    );
};

export default UserIdList;
