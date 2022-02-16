import React from 'react';
import {useHistory} from 'react-router-dom';
import { Table } from 'reactstrap';
import './table.css';

const UserItem = (props) => {
    const router = useHistory();
    return (                  
        <tr className="rowtable" onClick={() => router.push(`/users/${props.user.id}`)}>                
            <td>{props.user.id}</td>
            <td>{props.user.first_name}</td>
            <td>{props.user.last_name}</td>
            <td>{props.user.email}</td>
            <td>{props.user.gender}</td>
            <td>{props.user.ip_address}</td>                    
            <td>{props.user.total_clicks}</td>
            <td>{props.user.total_page_views}</td>
        </tr>
    );
};

export default UserItem;