
// //get comment count for menu_id
// async function getCommentCount(id) {
//     const response = await fetch('http://localhost:3001/comment/count/' + id);
//     const json = await response.json();
//     //console.log(json);
//     return json;
//   }

// //get like count for menu_id
// async function getLikeCount(id) {
//     const response = await fetch('http://localhost:3001/like/' + id);
//     const json = await response.json();
//     //console.log(json);
//     return json;
//   }


//   // fucntion to get username from account_id by fetching from backend as BACKEND_URL+'/user/username/' + id
// async function getUsername(id) {
//     const response = await fetch('http://localhost:3001/user/username/' + id);
//     const json = await response.json();
//     return json.username;
//   }