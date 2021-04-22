// api url
const api_url =
	`https://reqres.in/api/users`;

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	//if (response) {
		//hideloader();
	//}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
/*function hideloader() {
	document.getElementById('loading').style.display = 'none';
}*/

// Function to define innerHTML for HTML table
function show(data) {

    let tab=' ';
	// Loop to access all rows
	for (let r of data.data) {

    console.log(100);
var url = 'user.html?id=' + encodeURIComponent(r.id);

   tab += `<div class= "col-md-4 user" id="${r.id}" onClick="userProfile(${r.id})" ><a href=${url}><img src="${r.avatar}"  class="img-thumbnail"
    height="150px" width="150px" style="margin-top:10px"  ></a><p><span class="firstName">${r.first_name} </span><span class="lastName">${r.last_name}</span></p></div>`;
  }
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
