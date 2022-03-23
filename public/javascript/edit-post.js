async function editFormHandler(event) {
    event.preventDefault();

    const post_id = window.location.toString().split('/')[
            window.location.toString().split('/').length -1
        ];
        console.log(post_id)

    const title = document.querySelector('input[name="post-title"]').value;
    console.log(title)

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'put',
        body: JSON.stringify({title}),
        headers: {
            'Content-type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);