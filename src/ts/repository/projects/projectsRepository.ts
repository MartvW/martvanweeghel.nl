import { executeGetRequest } from '@api/client';
import { APIPath } from '@routes/appUrls';

export const getProjects = async () => {
    const [promise] = executeGetRequest(APIPath.projects);
    const result = await promise;
    return result.data;
};