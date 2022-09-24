import axios from "axios";

export default class PersonService {
    
    static async getAll(limit = 5, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users',
        {params: {
            _limit: limit,
            _page: page}
        })
        return response;
    }
    static async getPersonById(id) {
        const response = await axios.get
        ('https://jsonplaceholder.typicode.com/users/' + id)
        return response;
    }
}