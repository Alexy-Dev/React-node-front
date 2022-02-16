import React, {useState} from 'react';
// import MyInput from './UI/input/MyInput';
// import MyButton from './UI/button/MyButton';

const UserForm = ({create}) => {
    const [user, setUser] = useState({id:'', first_name:'', last_name:'', email:'', gender:'', ip_address:'', clicks:'', page_views:''})
    const addNewUser = (e) => {
        e.preventDefault()
        const newUser = {
            ...user, id: Date.now()
        }
        create(newUser)
        setUser({id:'', first_name:'', last_name:'', email:'', gender:'', ip_address:'', clicks:'', page_views:''})
        
      }
    return (
        <form style={{marginTop: '15px'}}>
        {/*управляемый компонент*/}
        {/* <MyInput 
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text" 
        placeholder="Name of Post"/> */}
        {/*неуправляемый/неконтролируемій компонент*/}
        {/* <MyInput 
        ref={bodyInputRef}
        type="text"
        placeholder="description of Post"/> */}
        {/* <MyInput 
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text" 
        placeholder="description of Post"/> */}
        {/* <MyButton onClick={addNewPost}>
          Add new post
        </MyButton> */}
      </form>
    );
};

export default UserForm;