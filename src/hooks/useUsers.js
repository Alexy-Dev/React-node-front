import { useMemo } from "react";

export const useSortedUsers = (users, sort) => {
    const sortedUsers = useMemo(() => {
        console.log('worked function of UserSorted');
        if(sort) {
          return [...users].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return users;
    
      }, [sort, users])
      return sortedUsers;
}

export const useUsers = (users, sort, query) => {
    const sortedUsers = useSortedUsers(users,sort);
    const sortedAndSearchedUsers = useMemo(() => {
        return sortedUsers.filter(user => user.title.toLowerCase().includes(query.toLocaleLowerCase()))
    
      }, [query, sortedUsers])
      return sortedAndSearchedUsers;
}