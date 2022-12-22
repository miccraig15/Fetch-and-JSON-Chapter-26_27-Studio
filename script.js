// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById("container");
            let index = 0
            container.addEventListener("click", function() {
                container.innerHTML = `
                    <div class="astronaut">
                            <h3>${json[index.firstName]} ${json[index.lastName]}
                            <ul>
                                <li>Hours in space: ${json[index.hoursInSpace]}</li>
                                <li>Active: ${json[index.active]}</li>
                                <li>Skills: ${json[index.skills]}</li>
                            </ul>
                        <img class="avatar" src=${json[index.picture]}>
                    <div/>
                    `;
                    index = (index + 1) % json.length;
            });
        });
    });
});