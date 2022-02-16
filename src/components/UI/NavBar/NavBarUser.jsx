import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Table } from 'reactstrap';
import UserIdItem from '../../UserIdItem';
import '../../table.css';
import AppService from '../../../services/AppService';
import { useFetching } from '../../../hooks/useFetching';
import UserIdList from '../../UserIdList';
import Spinner from '../spinner';
import ErrorMessage from '../../pages/ErrorMessage/ErrorMessage';


const NavBarUser = () => {
    const params = useParams()
    const [user, setUser] = useState([]);
    const [fetchUsersById, isUsersLoading, userError] = useFetching(async (id) => {
        const res = await AppService.getById(id);
        setUser(res.data)
        console.log(res.data);
    });
    
        // const resp = async (user_id) => await AppService.getByUserId(user_id);
        // setUser(resp.data)
        // console.log(resp.data)
    
    
    useEffect(() => {
        fetchUsersById(params.id)
      }, [])
    
     

        
    

    // if ('id' === 'user_id') {
    //     const resp = async () => await AppService.getByUserId(user_id);
    //     // setUser(resp.data)
    //     console.log(resp.data)
    // } 
    
   
  return (
      <div className = "topline">
      <h3 className = "logotitle" >
      <Link to = '/' >
      AppCo </Link>  
      </h3>
      <h3 className="nav">
              <Link to='/'>
              main page > 
              </Link>
              <span>&#160; <Link to='/users'>
              users pagelist > 
              </Link> </span>
              <span>&#160;
              <Link to='/users/:id'>
              
              User {params.id}
              </Link>
              </span>
          </h3>
      
      <h2 className= "titleusers" > User's page </h2>
      <Table className="table" striped bordered hover>
        <thead>
            <tr className="toptable">
                <th>Id</th>
                <th>First name</th>
                <th>Last name</th>
                <th>E-mail</th>
                <th>Gender</th>
                <th>Ip address</th>
                <th>User id</th>
                <th>Date</th>
                <th>Clicks</th>
                <th>Page views</th>
            </tr>
        </thead>
        <tbody className="bodytable">
        {/* {isUsersLoading
         ? <div style={{display: 'flex', justifyContent: 'center'}}><Spinner/></div>
         : <UserIdList user={user}/>
         } */}
         <UserIdList user={user}/>        
        </tbody>
        </Table>
      </div> 
  );
};

export default NavBarUser;