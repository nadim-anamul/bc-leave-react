
import axios from 'axios';
const apiUrl = 'http://localhost:3000/api/';

export const apiClient = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: { 
        'Content-Type': 'application/json',
        'Allow-Control-Allow-Origin': '*'
    }
});



