import axios from 'axios';
export default class AppService {
    static async  getAllUser(limit=50, page=1) {
            const resp = await axios.get('http://localhost:3000/users', {
                params: {
                    _limit: limit,
                    _page: page
                }
            });
            // return resp; - эта часть таблицы планово отрисовывается
            
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
            const output = sorts.reduce((result, item) => {
            const i = result.findIndex(resultItem => resultItem.id === item.user_id);
            const sortusers = sorts.filter((sort) => sort.user_id === item.id)    //при подставлении конкретного значения id -
            const total_clicks = sortusers.reduce((result, {clicks: value}) => result + value, 0);  //вычисления происходят
            const total_page_views = sortusers.reduce((result, {page_views: value}) => result + value, 0);  //вычисления происходят
            
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
}