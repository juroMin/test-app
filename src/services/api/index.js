import {API_KEY} from 'configs';
import axios from 'axios';

export const getBusinessNews = () => {
  const url =
    'https://api.nytimes.com/svc/topstories/v2/business.json?api-key=' + API_KEY;
  return axios.get(url);
};
