export default function authHeader() {
  // const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('auth-token');

  if (token) {
    // return { Authorization: 'Bearer ' + user.token };
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    };
  } else {
    return {};
  }
}
