export default class AuthService {
  constructor(baseUrl, tokenStorage) {
    this.baseUrl = baseUrl;
    this.tokenStorage = tokenStorage;
  }

  async signup(id, pw, name) {
    const data = await (await fetch(`${this.baseUrl}/api/users/join`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ id, pw, name }),
    })).json();
    if(data.code === "OK") {
      this.tokenStorage.saveToken(data.token);
      return data.user;
    } else {
      throw data.message
    }
  }

  async login(id, pw) {
    const data = await (await fetch(`${this.baseUrl}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ id, pw }),
    })).json();
    if(data.code === "OK") {
      this.tokenStorage.saveToken(data.token);
      return data.user;
    } else {
      throw data.message
    }
  }

  async me() {
    const token = this.tokenStorage.getToken();
    if(token) {
      const data = await (await fetch(`${this.baseUrl}/api/users/auth`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      })).json();
      if(data.code === "OK") {
        return data.user;
      } else {
        throw data.message
      }

    }
  }

  async logout() {
    this.tokenStorage.clearToken();
  }
}
