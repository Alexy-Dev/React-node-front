import React from 'react';
import './table.css';

const UserIdItem = (props) => {    
    return (        
        <tr className="rowtable">                
            <td>{props.user.id}</td>
            <td>{props.user.first_name}</td>
            <td>{props.user.last_name}</td>
            <td>{props.user.email}</td>
            <td>{props.user.gender}</td>
            <td>{props.user.ip_address}</td>
            <td>{props.user.user_id}</td>
            <td>{props.user.date}</td>                    
            <td>{props.user.clicks}</td>
            <td>{props.user.page_views}</td>
        </tr>
    );
};
export default UserIdItem;