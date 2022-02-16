import React from 'react';
// import MyInput from './UI/input/MyInput';
// import MySelect from './UI/select/MySelect';

const UserFilter = ({filter, setFilter}) => {
    return (
        <div>
        {/* <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="...Serch"        
        /> */}
        {/* <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="SortUsers"
        options={[
          {value: "title", name: 'UsersName'},
          {value: "body", name: 'UserDescribtion'}
        ]}
        /> */}
      </div>
    );
};

export default UserFilter;