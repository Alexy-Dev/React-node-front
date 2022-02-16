import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from 'reactstrap/lib/Table';
import '../../table.css';
import AppService from '../../../services/AppService';
import UserList from '../../UserList';
import Spinner from '../spinner';
import { useFetching } from '../../../hooks/useFetching';
import { getPagesCount, getPagesArray } from '../../../utils/pages';
import './NavBar.css';



const NavBar = () => {
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(50);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  let pagesArray = getPagesArray(totalPages)
  
  const [fetchUsers, isUsersLoading, userError] = useFetching( async () => {
    const resp = await AppService.getAllUser(limit, page);
    setUsers(resp.data)
    const totalCount = resp.headers['x-total-count'];
      setTotalPages(getPagesCount(totalCount, limit))
  })
  

useEffect(() => {
  fetchUsers()
}, [page])

const changePage = (page) => {
    setPage(page)
    fetchUsers(limit, page)
  }
    return (
      <div className='statpage'>
        {/* <div className='navigate'> */}
         <div className = "topline">
          <h3 className = "logotitle" >
            <Link to = '/' >
            AppCo </Link>  
          </h3>
        {/* <Calc/> */}
          <h3 className="nav">
                <Link to ='/'>
                main page > 
                </Link>
                <span>&#160;
                  <Link to='/users'>
                   users pagelist 
                  </Link>
                </span>
                
            </h3>
        
        <h2 className= "titleusers" > Users statistics </h2>
        </div>
        {/* </div> */}
        <div className='table-user'>
          {/* <div className="table_user" > */}
            <Table className="table" striped bordered hover size="sm">
            <thead>
                <tr className="toptable">
                    <th>Id</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>E-mail</th>
                    <th>Gender</th>
                    <th>Ip address</th>
                    <th>Total clicks</th>
                    <th>Total page views</th>
                </tr>
            </thead>
            
            <>
            {/* {userError &&
            <h1>Error ${userError}</h1>
            } */}
            {/* {isUsersLoading
            ? <div style={{display: 'flex', justifyContent: 'center'}}><Spinner/></div>
            : <UserList users={users} key={users.id}/>
            } */}
            <UserList users={users} key={users.id}/>
              
            
            {/* <UserList users={users} key={users.id}/> */}
            {/* {users2.map(user2 => 
            <UserItem user={user2} key={user2.id}/>
            )}  */}
            {/* <div style={{marginTop: '12px'}}>
              {pagesArray.map(p =>
              <button style={{borderRadius: '4px', padding: '10px', cursor: 'pointer'}} key={p}>{p}</button>
              )}
              </div> */}
              {/* <Pagination page={page} changePage={changePage} totalPage={totalPage}/> */}
              {/* <div className="page_wrapper">
              {pagesArray.map(p =>
              <span
              onClick={() => changePage(p)}
              className={page === p ? 'page_current' : 'page'}
                key={p}
                >
                  {p}
                  </span>
              )}
              </div> */}
            </>
            </Table>
        {/* </div> */}
        
        <div className="page_wrapper">
          {pagesArray.map(p =>
          <span
          onClick={() => changePage(p)}
           className={page === p ? 'page_current' : 'page'}
            key={p}
            >
              {p}
              </span>
          )}
          </div>
        
          {/* <div className='bottomline'></div> */}
        </div> 
        </div>
        
    );
};
export default NavBar;