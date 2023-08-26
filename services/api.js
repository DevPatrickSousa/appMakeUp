import axios from 'axios'



const api = axios.create({
    baseURL:'https://apiappmakeup.vercel.app'
})

export default api;