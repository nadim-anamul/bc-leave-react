
import axios from 'axios';
const apiUrl = 'http://localhost:5000';

export const apiClient = axios.create({
    baseURL: apiUrl,
    timeout: 100000,
    headers: { 
        'Content-Type': 'application/json',
        'Allow-Control-Allow-Origin': '*'
    }
});



