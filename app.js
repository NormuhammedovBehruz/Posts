const postsContainer = document.querySelector('.posts-container')

function createCard(post) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
            <div class="card-header d-flex">
                <img class="raunded me-3" src="https://picsum.photos/100/100?random=${post.id}" alt="" />
                <div>
                    <h4>${post.name}</h4>
                    <p>@${post.username}</p>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
                <button class="btn btn-success mb-3" data-bs-toggle="collapse" data-bs-target="#collapse${post.id}"
                    aria-expanded="true" aria-controls="collapseOne">
                    Show comments
                </button>
                <div id="collapse${post.id}" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    ${post.comments.map((comment) => {
                        return`
                        <div class="accordion-body card p-3">
                            <h3>${comment.name}</h3>
                            <p>${comment.body}</p>
                            <p>Email: <em>${comment.email}</em></p>
                        </div>
                        `
                    })}
                </div>
            </div>
    `
    postsContainer.appendChild(card )
}

function renderPosts(posts, lenght = posts.lenght) {
    for (let i = 0; i < lenght; i++) {
        let postObject = {
            id: posts[i].id,
            name: posts[i].user.name,
            username: posts[i].user.username,
            title: posts[i].title,
            body: posts[i].body,
            comments: posts[i].comments,
        }
        createCard(postObject)
    }
}

renderPosts(posts, 5)