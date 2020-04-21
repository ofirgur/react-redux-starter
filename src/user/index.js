class User {
  constructor() {
    this.locale = 'en';
    this.onSuccess = this.onSuccess.bind(this);
  }
 
  onSuccess(payload) {
    this.lang = payload.lang;
    this.direction = payload.direction;
  }
}

const user = new User();
export default user;