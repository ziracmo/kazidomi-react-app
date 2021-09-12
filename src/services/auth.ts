import axios from 'axios';

import { environnement } from '../utils/environnement';

const authService = {
  async login(username: string, password: string) {
    const data = await axios.post(`${environnement.url}auth/login`, {
      username,
      password,
    });
    // console.log(data);
    return data.data;
  },
};

export default authService;
