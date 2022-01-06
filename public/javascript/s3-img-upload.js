/*
 Function to carry out the actual PUT request to S3 using the signed request from the app.
 */
function uploadFile(file, signedRequest, url) {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", signedRequest);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        document.getElementById("blog-photo-preview").src = url;
        document.getElementById("blog-photo-url").value = url;
        document.getElementById("blog-photo-s3-url").innerHTML = url;
        setImageVisible("blog-photo-preview", true);
      } else {
        console.log(xhr.status);
        console.log(xhr);
        alert("Could not upload file.");
      }
    }
  };
  xhr.send(file);
}

function setImageVisible(id, visible) {
  var img = document.getElementById(id);
  img.style.visibility = (visible ? 'visible' : 'hidden');
}

/*
Function to get the temporary signed request from the app.
If request successful, continue to upload the file using this signed request.
*/
function getSignedRequest(file) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `/api/sign-s3?file-name=${file.name}&file-type=${file.type}`);
  console.log(xhr);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        uploadFile(file, response.signedRequest, response.url);
      } else {
        alert("Could not get signed URL.");
      }
    }
  };
  xhr.send();
}

/*
Function called when file input updated. If there is a file selected, then
start upload procedure by asking for a signed request from the app.
*/
function initS3Upload() {
  const files = document.getElementById("blog-photo").files;
  const file = files[0];
  if (file == null) {
    return alert("No file selected.");
  }
  getSignedRequest(file);
}

/*
Bind listeners when the page loads.
*/
(() => {
  document.getElementById("blog-photo").onchange = initS3Upload;
})();
