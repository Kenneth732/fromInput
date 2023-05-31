const form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = 'Post cannot be blank';
    } else {
        console.log('success');
        msg.innerHTML = "";
        acceptData();
    }
    input.value = "";
};

let dataObj = {};

let acceptData = () => {
    dataObj["text"] = input.value;
    createPosts();
};

let createPosts = () => {
    posts.innerHTML +=
       `<div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <div class="post-text">
                    <p>${dataObj.text}</p>
                </div>
                <div class="d-flex justify-content-end">
                  <button class="btn btn-link me-2" onClick='editPosts(this.parentNode.parentNode)'><i class="bi bi-pencil-square"></i></button>
                  <button class="btn btn-link" onClick="deletePost(this.parentNode.parentNode)"><i class="bi bi-trash-fill"></i></button>
                </div>
              </div>
            </div>
       </div>`;
};

let deletePost = (div) => {
    div.remove();
};

let editPosts = (div) => {
    let postText = div.getElementsByClassName("post-text")[0].firstChild;
    input.value = postText.textContent;
};
