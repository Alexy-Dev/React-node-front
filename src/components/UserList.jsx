import React from 'react';
import UserItem from './UserItem';


const UserList = ({users}) => {
    // if (!users.length) {
    //     return (
    //         <h1 style={{textAlign: 'center'}}>User is not found</h1>
    //     )
    // }
    return (
        <tbody>
        {users.map(user => 
           <UserItem user={user} key={user.id}/>
            )}
        </tbody>
    );
};
export default UserList;
