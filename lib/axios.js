import { GLOBAL } from '@/GLOBAL'
import Axios from 'axios'

const axios = Axios.create({
    baseURL: GLOBAL.APP_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
