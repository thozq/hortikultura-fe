export default function authHeader() {
  // const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('auth-token');
  const childToken = localStorage.getItem('child-token');

  if (childToken) {
    return {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      Authorization: `Bearer ${childToken}`
    };
  } else if (token) {
    return {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    };
  } else {
    return {};
  }
}
