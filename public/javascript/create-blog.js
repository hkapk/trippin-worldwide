async function newBlogHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="blog-title"]').value;
    const description = document.querySelector('textarea[name="blog-description"]').value;
    const content = document.querySelector('textarea[name="blog-content"]').value;
    const start_date = document.querySelector('input[name="start-date"]');
    const end_date = document.querySelector('input[name="end-date"]');
    const city = document.querySelector('input[name="city"]');
    const country = document.querySelector('input[name="country"]');

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
            content,
            start_date,
            end_date,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.create-blog-form').addEventListener('submit', newBlogHandler);