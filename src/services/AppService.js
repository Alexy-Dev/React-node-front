import axios from 'axios';
export default class AppService {
    static async  getAll(limit=50, page=1) {
        // try {
            const resp = await axios.get('http://localhost:3000/users',
            {
                params: {
                    _limit: limit,
                    _page: page
                }
            }
            )
            
            return resp;
    }
    static async  getAllAll() {
        // try {
            const respo = await axios.get('http://localhost:3000/users')
            return respo;
    }
    static async  getAllInfo() {
        // try {
            const res = await axios.get('http://localhost:3000/statistic')
            return res;
    }
    static async  getById(id) {
        // try {
            const res = await axios.get('http://localhost:3000/users/' + id)
            return res;
            // const respone = await axios.get('http://localhost:3000/statistic/' );
            // // if (id = user_id) {
            // return respone;
            // // }
            // const resuser = res.concat(respone)
            // if (id === user_id) {
            //     return resuser; 
            // // }
            // return res
            
    }
    static async  getByUserId(user_id) {
        // try {
            const respone = await axios.get('http://localhost:3000/statistic/' + user_id)
            return respone;
    }

    static async  getAllUser(limit=50, page=1) {
        
        // try {
            const resp = await axios.get('http://localhost:3000/users', {
                params: {
                    _limit: limit,
                    _page: page
                }
            });
            // return resp;
            
            const res = await axios.get('http://localhost:3000/statistic')
            const groups = resp.data.concat(res.data);
            const sorts = groups.sort(function(a, b) {
                if (a.user_id > b.user_id) {
                    return 1;
                }
                if (a.user_id < b.user_id) {
                    return -1;
                }
                return 0;
            });
            // console.log(sorts);
            
            const output = sorts.reduce((result, item) => {
            const i = result.findIndex(resultItem => resultItem.id === item.user_id);
            
            // const sorted = sorts.filter((sort) => sort.id)
            // console.log(sorted);
            const sortusers = sorts.filter((sort) => sort.user_id === item.id)
            // console.log(sortusers);
            // const users = sorted.concat(sortusers)
            // console.log(users)
            
            const total_clicks = sortusers.reduce((result, {clicks: value}) => result + value, 0);
            // console.log(total_clicks);
            const total_page_views = sortusers.reduce((result, {page_views: value}) => result + value, 0);
            // console.log(total_page_views);
    
            if (i === -1) {
    
            result.push(item)
            } else {
            result[i] = {
                ...result[i],
                ...item,
                total_clicks,
                total_page_views
            }
            }
    
            return result
        }, [])
        console.log(output);
    }
    // static async getAllUserInfo () {
    //     const respon = await axios.get('http://localhost:3000/users');
    //     const res = await axios.get('http://localhost:3000/statistic')
    //     const groups = respon.data.concat(res.data);
    //     const sorts = groups.sort(function(a, b) {
    //         if (a.user_id > b.user_id) {
    //             return 1;
    //         }
    //         if (a.user_id < b.user_id) {
    //             return -1;
    //         }
    //         return 0;
    //     }, []);
    //     console.log(sorts);
    //     const sorted = sorts.filter((sort) => sort.id === 2)
    //     console.log(sorted);
    //     const sortusers = sorts.filter((sort) => sort.user_id === 2)
    //     console.log(sortusers);
    //     const users = sorted.concat(sortusers)
    //     console.log(users)
        
    //     const total_clicks = sortusers.reduce((result, {clicks: value}) => result + value, 0);
    //     console.log(total_clicks);
    //     const total_page_views = sortusers.reduce((result, {page_views: value}) => result + value, 0);
    //     console.log(total_page_views);
    // } 
} 

        // const sorted = sort.reduce((item, result) => {
        //     const i = result.findIndex(resultItem => resultItem.id === item.user_id);
        //     // if (item.id == item.user_id) {
        //     //     item.id.concat(item.user_id);
        //     if (i === -1) {

        //             result.push(item)
        //           } else {
        //             result[i] = {
        //               ...result[i],
        //               ...item,
        //             //   totalclicks,
        //             //   total_page_views
        //             }
        //           }
            
        //           return result
        //         // return i;
        //     })
        //     console.log(sorted);
        // //     if (i === -1) {

        // //             result.push(item)
        // //           } else {
        // //             result[i] = {
        // //               ...result[i],
        // //               ...item,
        // //             //   totalclicks,
        // //             //   total_page_views
        // //             }
        // //           }
            
        // //           return result
        // //         }, [])
        // };
        
    
    
        //     static async  getStat(limit = 10, page = 10) {
        
        //         const resp 
        //     const response = await axios.get('http://localhost:3000/statistic',{
        //         params: {
        //             _limit: limit,
        //             _page: page
        //         }
        //     })
        //     return response;
        // }

    // static async  getAll(id, user_id, first_name, last_name, email, gender, ip_address, date, page_views, clicks) {
        // try {
            // const resp = await axios.get('http://localhost:3000/users',{
            //     params: {
            //         _id: id,
            //         _first_name: first_name,
            //         _last_name: last_name,
            //         _email: email,
            //         _gender: gender,
            //         _ip_address: ip_address,                    
            //     }
            // })
            
            // const respStat = await axios.get('http://localhost:3000/statistic',{
            //     params: {                    
            //         _user_id: user_id,
            //         _date: date,
            //         _page_views: page_views,
            //         _clicks: clicks
            //     }
            // })
            // async componentDidMount() {
            // const response = await axios.get('http://localhost:3000/users');
            // const data = await response.json();
            // const res = await axios.get('http://localhost:3000/statistic');
            // const datas = await res.json();
        
    // const groups = data.concat(datas);

    // const output = groups.reduce((result, item, currentUserItem, onItemSelected) => {
    //   // onItemSelected = this.props.onItemSelected;


    //   const i = result.findIndex(resultItem => resultItem.id === item.user_id);
    //   const totalclicks = groups.reduce((prev, next) => prev.clicks + next.clicks, 0);
    //   const total_page_views = groups.reduce((prev, next) => prev.page_views + next.page_views, 0);

    //   if (i === -1) {

    //     result.push(item)
    //   } else {
    //     result[i] = {
    //       ...result[i],
    //       ...item,
    //       totalclicks,
    //       total_page_views
    //     }
    //   }

    //   return result
    // }, [])
    // console.log(output)

            
            
            // const resp = await axios.get('https://localhost:3000/')
            // const data = await resp.json();
            
            // const res = await axios.get('https://localhost:3000/statistic')
            // const datas = await res.json();

            // const groups = data.concat(datas);
            // return res;
            // console.log(data);
            // console.log(datas);
            // const res = await axios.get('https://localhost:3000/statistic')
            // return res;
            // return response.data
        // } catch (e) {
        //     console.log(e);
        // }   
        // console.log([response]); 
        // return data;
        
            
    // }

// }export default class AppService {

//     constructor() {
//         this._apiBase = 'http://localhost:3000'; //способ задать основу url, чтобы не повторять ее при каждом запросе   

//     };

    // getResource = async (users, statistic) => {
    //     const response = await fetch(`${this._apiBase}${users}`);
    //     const data = await response.json();
    //     const res = await fetch(`${this._apiBase}${statistic}`);
    //     const datas = await res.json();
    
    //     const groups = data.concat(datas);
    
    //     const output = groups.reduce((result, item) => {
    //       // onItemSelected = this.props.onItemSelected;
    
    
    //       const i = result.findIndex(resultItem => resultItem.id === item.user_id);
    //       const totalclicks = groups.reduce((prev, next) => prev.clicks + next.clicks, 0);
    //       const total_page_views = groups.reduce((prev, next) => prev.page_views + next.page_views, 0);
    
    //       if (i === -1) {
    
    //         result.push(item)
    //       } else {
    //         result[i] = {
    //           ...result[i],
    //           ...item,
    //           totalclicks,
    //           total_page_views
    //         }
    //       }
    
    //       return result
    //     }, [])
    // }
    // // async (url) => { //необходимо отправлять асинхронный запрос
    // //     const res = await fetch(`${this._apiBase}${url}`); //дождаться отработки этой команды запроса

    // //     if (!res.ok) {
    // //         throw new Error(`Could not fetch ${url}` +
    // //             `, received: ${res.status}`);
    // //     }
    // //     return await res.json(); //дождаться отработки этой команды ответа от сервера    
    // // }

    // getAllUsers = async () => {
    //     const resp = await this.getResource(`/users/`);
    //     return resp.map(this._transformUser);
    //     // return this.getResource(`/books/`);  //настраиваем получение одного персонажа по id
    // }
    // getUser = async (id) => {
    //     const user = await this.getResource(`/users/${id}/`);
    //     return this._transformUser(user);
    //     // return this.getResource(`/books/${id}`);  //настраиваем получение одного персонажа по id
    // }


    // isSet(output) {
    //     if (output) {
    //         return output
    //     } else {
    //         return 'no data :('
    //     }
    // }

    // _extractId = (item) => {
    //     const idRegExp = /\/([0-9]*)$/;
    //     return item.url.match(idRegExp)[1]; //присвоение id
    // }

    // _transformUser = (user) => {
    //     return {
    //         id: this.isSet(user),
    //         name: this.isSet(user.first_name),
    //         lastName: this.isSet(user.last_name),
    //         email: this.isSet(user.email),
    //         gender: this.isSet(user.gender),
    //         ipAdress: this.isSet(user.ip_address),
    //         clicks: this.isSet(user.clicks),
    //         page_views: this.isSet(user.page_views),
    //         totalClicks: this.isSet(user.total_clicks),
    //         totalPage: this.isSet(user.total_page_views),
    //     };
    // }
