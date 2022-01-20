
import axios from 'axios';
const apiUrl = 'http://localhost:5000';

const token = localStorage.getItem('token');
console.log('token', token);

export const apiClient = axios.create({
    baseURL: apiUrl,
    timeout: 100000,
    headers: { 
        // 'Content-Type': 'application/json',
        'Allow-Control-Allow-Origin': '*',
        'authorization' : `Bearer ${token}`
    }
});



