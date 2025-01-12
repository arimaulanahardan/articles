import axios from 'axios';
import { IApiResponse } from '../interfaces';

const API_URL = 'https://extra-brooke-yeremiadio-46b2183e.koyeb.app/api/articles?populate=*';

export const fetchArticles = async (): Promise<IApiResponse> => {
    const response = await axios.get<IApiResponse>(API_URL);
    return response.data;
};