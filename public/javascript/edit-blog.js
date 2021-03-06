$(function() {
    $('#start-date-edit').datepicker({
        dateFormat: 'yy-mm-dd'
    });
});
$(function() {
    $('#end-date-edit').datepicker({
        dateFormat: 'yy-mm-dd'
    });
});

async function editBlogHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="blog-title"]').value;
    const description = document.querySelector('textarea[name="blog-description"]').value;
    const content = document.querySelector('textarea[name="blog-content"]').value;
    const start_date = document.querySelector('input[name="start-date"]').value;
    const end_date = document.querySelector('input[name="end-date"]').value;
    const city = document.querySelector('input[name="city"]').value;
    const country = document.querySelector('input[name="country"]').value;
    const activity = document.querySelector('textarea[name="activity-name"]').value;
    const cuisine = document.querySelector('textarea[name="cuisine-name"]').value;
    
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length -1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            description,
            content,
            start_date,
            end_date,
            city,
            country,
            activity,
            cuisine
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        setTimeout(() => {document.location.replace('/dashboard')}, 100);
    } else {
        alert(response.statusText);
    }
}



document.querySelector('#edit-blog-form').addEventListener('submit', editBlogHandler);
