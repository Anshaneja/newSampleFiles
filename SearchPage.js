let searchResultsBox = document.getElementById("search-results-box");

for( let i=0; i<5;i++){
    searchResultsBox.insertAdjacentHTML("beforeend",`<div class="user-profile-card">
    <div class="profile-card-image-container">
        <img class="profile-card-image" src="assets/images/profile.jpeg"/>
    </div>
    <h3>Ansh Aneja</h3>
    <h5>Software Engineer at Google</h6>
    <h6 class="pb-2">Gurgaon, India</h6>
    <button class="button__primary">Message</button>
    </div>`);
}
console.log("hi");