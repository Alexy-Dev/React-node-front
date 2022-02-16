import React, { useState } from "react";
import AppService from "./AppService";
import { useFetching } from "../hooks/useFetching";

const Calc = async () => {

// const resp = await AppService.getAll();
const res = await AppService.getAllUserInfo();
console.log(res);
// const respo = await AppService.getAllAll();
// const resone = await AppService.getById();
// const resoneuser = await AppService.getByUserId();
// const respone = await AppService.getAllUser();
// const {user, setUser} = useState([]);
// const [fetchUsersById, isUsersLoading, userError] = useFetching(async () => {
//     const res = await AppService.getAllUser();
//     setUser(res.data)
//     return console.log(res.data)
// })
// useEffect(() => {
//     fetchUsersById(user_id)
//   }, [])
// return console.log(res.data)
// const groups = await AppService.getAllUser();

// console.log(respone)
// console.log(resoneuser)
// console.log(resone)
// console.log(res.data)
// const sort = res.data.sort(function(a, b) {
//     if (a.user_id > b.user_id) {
//         return 1;
//     }
//     if (a.user_id < b.user_id) {
//         return -1;
//     }
//     return 0;
// });
// sort.map(item, user_id) {
//     if (a.user_id = b.user_id)
//     {return [user_id];}
    
// }
// console.log(sort)

// console.log(respo.data)
// const groups = respo.data.concat(res.data);
// console.log(groups)
// const output = groups.reduce((result, item) => {
  
//     const i = result.findIndex(resultItem => resultItem.id === item.user_id)
      
//     if(i === -1) {
//       // No item in current result array found that matches the date of item
//       // so add item to result array
//       result.push(item)
//     }
//     else {
//       // An item found with date matching item in current result so combine 
//       // the two into a new object and assign this back into our result 
//       // array
//       result[i] = { ...result[i], ...item }
//     }
    
//     return result
//   }, [])
  
//   console.log(output);

}
export default Calc