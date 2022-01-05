async function deleteFormHandler(event) {
  event.preventDefault();

  const id = document.querySelector(".delete-btn").getAttribute("data-id");

  const response = await fetch(`/api/comments/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#button-bubble").addEventListener("click", deleteFormHandler);
