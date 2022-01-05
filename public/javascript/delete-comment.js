async function deleteCommentHandler(event) {
console.log("button click");
//event.preventDefault();



//this id is where this function is failing on the dashboard page
//want the id to be the href localhost/post/${id} and not the window location
const id = document.querySelector(".id");


// window.location.toString().split('/')[
//     window.location.toString().split('/').length - 1
// ]
//the above gets the post id, need to get the comment_id

console.log(id);
// const response = await fetch(`/api/comments/${id}`, {
//     method: 'DELETE'
// });
// if (response.ok) {
//     document.location.replace('/dashboard');
//     console.log("it did work");
// } else {
//     alert(response.statusText);
//     console.log("didn't work, maybe there is not a comment with ID of 12");
// }
}


//jquery to get button clicks
$(".button.delete-comment-btn").click(function(){deleteCommentHandler()});