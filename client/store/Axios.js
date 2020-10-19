import Axios from 'axios';

const AxiosCall = async (callObj) => {
    const { url, method, data, contentType, version = 'v1' } = callObj;

    try {
        const res = await Axios({ method, url, data, json: true });
        const result = res && res.data;
        return result;
      } catch (error) {
        throw error;
      }
    };
    
export default AxiosCall;