import axios from 'axios';

const defaultTimeoutLength = 4000; // 4 seconds

const axiosInstance = axios.create({
    baseURL: 'http://192.168.2.29:3005/martvanweeghel',
    headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
    }
});

export const executeGetRequest = (path: string) => {
    const promise = axiosInstance.get(path, {
        timeout: defaultTimeoutLength,
    });

    return [promise];
};