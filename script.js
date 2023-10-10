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
    else if (subTabName === 'api') {
        initializeApi();
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

function initializeApi() {

    console.log("Here");
    var apiBtn = document.getElementById("apiBtn");
    var output2 = document.getElementById("output2");
    
    apiBtn.addEventListener("click", function() {
        $.post("http://35.188.215.226:8000/my_program",{"name":"Edward", "program":"cs"},post_back)
    });

    function post_back(data, status){
        console.log("Post status");
        console.log(status);
        console.log("Post data");
        console.log(data);
        console.log(data["name"]);
        output2.innerHTML+= "Here are the current CS Classes: "
        let i = 0;
        for (i; i < data["Course"].length - 1; i++){
            output2.innerHTML += data["Course"][i] + ", ";
        }
        output2.innerHTML += data["Course"][i] + ". ";
        
    }
}

