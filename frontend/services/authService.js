// import axios from 'axios';

// const API_URL = 'https://your-api-endpoint.com';

export const login = async (id, password) => {
    try {
      // const response = await axios.post(`${API_URL}/login`, { id, password });
      // return response.data;
  
      // 모의 데이터
      return {
        token: 'mock-token',
        userId: id,
      };
    } catch (error) {
      throw error;
    }
  };
  
  export const signup = async (name, id, password, inviteCode) => {
    try {
      // const response = await axios.post(`${API_URL}/signup`, {
      //   name,
      //   id,
      //   password,
      //   inviteCode
      // });
      // return response.data;
  
      // 모의 데이터
      return {
        success: true,
      };
    } catch (error) {
      throw error;
    }
  };
  