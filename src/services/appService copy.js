export default class AppService {

    constructor() {
        this._apiBase = 'http://localhost:3000'; //способ задать основу url, чтобы не повторять ее при каждом запросе   

    };

    getResource = async (url) => { //необходимо отправлять асинхронный запрос
        const res = await fetch(`${this._apiBase}${url}`); //дождаться отработки этой команды запроса

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received: ${res.status}`);
        }
        return await res.json(); //дождаться отработки этой команды ответа от сервера    
    }

    getAllUsers = async () => {
        const res = await this.getResource(`/users/`);
        return res.map(this._transformUser);
        // return this.getResource(`/books/`);  //настраиваем получение одного персонажа по id
    }
    getUser = async (id) => {
        const user = await this.getResource(`/users/${id}/`);
        return this._transformUser(user);
        // return this.getResource(`/books/${id}`);  //настраиваем получение одного персонажа по id
    }


    isSet(data) {
        if (data) {
            return data
        } else {
            return 'no data :('
        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1]; //присвоение id
    }

    _transformUser = (user) => {
        return {
            id: this.isSet(user),
            name: this.isSet(user.first_name),
            lastName: this.isSet(user.last_name),
            email: this.isSet(user.email),
            gender: this.isSet(user.gender),
            ipAdress: this.isSet(user.ip_address),
            clicks: this.isSet(user.clicks),
            page_views: this.isSet(user.page_views),
            totalClicks: this.isSet(user.total_clicks),
            totalPage: this.isSet(user.total_page_views),
        };
    }
}