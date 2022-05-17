import axios from 'axios';

const defaultTimeoutLength = 4000; // 4 seconds

const axiosInstance = axios.create({
    baseURL: 'https://api.martvanweeghel.nl/martvanweeghel',
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