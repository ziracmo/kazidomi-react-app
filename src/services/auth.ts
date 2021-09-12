import axios from 'axios';

import { LoginResponse, LoginResponseStatus } from '../models/auth';
import { environnement } from '../utils/environnement';
import { showToast } from './toasts';

const authService = {
  async login(username: string, password: string): Promise<LoginResponse> {
    try {
      const res: LoginResponse = {
        status: LoginResponseStatus.Success,
      };
      // POST to our API the username and password
      const data = await axios.post(`${environnement.url}auth/login`, {
        username,
        password,
      });
      // if we have an error we present it to the user
      if (data.data.status === 'Error') {
        res.status = LoginResponseStatus.Error;
        showToast(`An error happened during login : ${data.data.msg}`, 'error');
      }
      res.token = data.data;
      return res;
    } catch (e: any) {
      // if we have an error we present it to the user
      showToast(`An error happened during login : ${e}`, 'error');
      const res: LoginResponse = {
        message: e,
        status: LoginResponseStatus.Error,
      };
      return res;
    }
  },
};

export default authService;
