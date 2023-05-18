

export default function auth_header() {

    const user = JSON.parse(localStorage.getItem('user1'));

    if(user && user.accessToken){
        return{
            Authorization: 'Bearer ' + user.accessToken
        };
    } else {
  return {
    
  };
}
}
