function isAuthenticated() {
    const token = localStorage.getItem('token');
    return token !== null;
  }


  export default isAuthenticated