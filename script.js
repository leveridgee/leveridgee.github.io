function openMainTab(tabName) {
    // Hide all main tab contents
    var mainTabContents = document.getElementsByClassName("main-tab-content");
    for (var i = 0; i < mainTabContents.length; i++) {
        mainTabContents[i].style.display = "none";
    }

    // Show the selected main tab content
    document.getElementById(tabName + "-content").style.display = "block";
}

function openSubTab(subTabName) {
    // Hide all sub tab contents
    var subTabContents = document.getElementsByClassName("sub-tab-content");
    for (var i = 0; i < subTabContents.length; i++) {
        subTabContents[i].style.display = "none";
    }

    // Show the selected sub tab content
    document.getElementById(subTabName + "-content").style.display = "block";

    // Initialize events when the "Projects" sub-tab is clicked
    if (subTabName === 'projects') {
        initializeEvents();
    }
}

function initializeEvents() {
    var clickBtn = document.getElementById("clickBtn");
    var dynBtn = document.getElementById("dynBtn");
    var output = document.getElementById("output");

    // Click event
    clickBtn.addEventListener("click", function() {
        output.innerHTML = "Button was clicked";
    });

    // Mouseover event
    clickBtn.addEventListener("mouseover", function() {
        output.innerHTML = "Button was hovered over";
    });

    // Keydown event
    document.addEventListener("keydown", function(event) {
        output.innerHTML = "You pressed this key: " + event.key;
    });

    // Focus event
    dynBtn.addEventListener("focus", function() {
        output.innerHTML = "The Dynamic button is in focus";
    });

    // Blur event
    dynBtn.addEventListener("blur", function() {
        output.innerHTML = "The Dynamic button was blurred";
    });
}

    var apiBtn = document.getElementById("apiBtn");
    var apiOutput = document.getElementById("apiOutput");

    apiBtn.addEventListener("click", function() {
        fetch('http://35.188.215.266:8000/my_program', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'name=YourName&program=all' // You can change 'all' to 'cs', 'se', or 'me' based on your requirement
        })
        .then(response => response.json())
        .then(data => {
            apiOutput.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            apiOutput.innerHTML = "Error: " + error.message;
        });
    });