export default function header() {
  let user = JSON.parse(localStorage.getItem('user'));
  
  if (user && user.accessToken) {
    return { 
      headers: {
        'x-access-token': user.accessToken
      } 
    };
  } else {
    return {};
  }
}
