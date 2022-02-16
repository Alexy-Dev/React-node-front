import React, {useState, useEffect} from 'react';
import '../../style/app.css';
import NavBar from '../UI/NavBar/NavBar';




function UsersPage() {
  

  return (
    <div>     
      <NavBar/>
      {/* <MyButton style={{marginTop: 30}}onClick={() => setModal(true)}>
        Create User
      </MyButton>
      <MyModal visible={modal} setVisible={setModal} >
        <UserForm create={createUser}/>        
      </MyModal>
      <hr style={{margin: '15px 0'}}/>      
      <UserFilter
        filter={filter}
        setFilter={setFilter}
      /> */}
      {/* <UserForm create={createUser}/>  */}
      
      {/* {userError &&
        <h1>It's error ${userError}</h1>
        }
      {isUsersLoading
        ? <Spinner center/>
        :
        <>
        {userError ?
        <UserList user={[]} title={'User List JS'}/>
        :  */}
        {/* {users.map(user => 
        <UserItem user={user} key={user.id}/>
        )}        */}
            
        {/* }
        <Pagination
         page={page}
         changePage={changePage}
         totalPages={totalPages}
        />
        </>
      } */}
      <div className='bottomline'></div>
    </div>
  );
  
}


export default UsersPage;