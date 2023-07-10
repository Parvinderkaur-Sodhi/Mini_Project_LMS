import axios from 'axios';

class AuthService {
  constructor() {
    const api = axios.create({
        baseURL: 'http://localhost:8089/api/auth',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000', // Replace with your React app's domain
        },
      });
  }

  signIn(loginDto) {
    return this.api.post('/signin', loginDto);
  }

  signUp(signUpDto) {
    return this.api.post('/signup', signUpDto);
  }

  logout() {
    return this.api.post('/logout');
  }
}

export default new AuthService();
