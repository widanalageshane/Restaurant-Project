
//get comment count for menu_id.........................Comment get count......................
async function getCommentCount(id) {
    const response = await fetch('http://localhost:3001/comment/count/' + id);
    const json = await response.json();
    //console.log(json);
    return json;
}





//.........getLike count......addLike.........delete like...............


//get like count for menu_id
async function getLikeCount(id) {
    const response = await fetch('http://localhost:3001/like/' + id);
    const json = await response.json();
    //console.log(json);
    return json;
}

// addnew like to the like_count table
async function addLike(menu_id, account_id) {
    return new Promise(async(resolve, reject) => {
        const json = JSON.stringify({menu_id: menu_id, account_id: account_id });
        fetch('http://localhost:3001/like/new',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: json
         })
        .then((response) => response.json())
        .then((json) => {
            resolve(json);
        })
    })
}


export {getCommentCount, getLikeCount, addLike};