function openMainTab(tabName) {
    var mainTabContents = document.getElementsByClassName("main-tab-content");

    for (var i = 0; i < mainTabContents.length; i++) {
        mainTabContents[i].style.display = "none";
    }

    document.getElementById(tabName + "-content").style.display = "block";
}

function openSubTab(subTabName) {
    var subTabContents = document.getElementsByClassName("sub-tab-content");

    for (var i = 0; i < subTabContents.length; i++) {
        subTabContents[i].style.display = "none";
    }

    document.getElementById(subTabName + "-content").style.display = "block";

    if (subTabName === 'projects') {
        var counter = document.getElementById("counter");
        counter.innerHTML = "Things Done: " + 0;
        initializeEvents();
    }
    else if (subTabName === 'api') {
        initializeApi();
    }
}

function initializeEvents() {
    let ct = 0;
    var clickBtn = document.getElementById("clickBtn");
    var dynBtn = document.getElementById("dynBtn");
    var output = document.getElementById("output");
    var counter = document.getElementById("counter");

    document.addEventListener("keydown", function(event) {
        output.innerHTML = "You pressed this key: " + event.key;
        ct+=1;
        counter.innerHTML = "Things Done: " + ct;
        
    });

    clickBtn.addEventListener("click", function() {
        output.innerHTML = "";
        var img = document.createElement("img");
        img.src = "Img/me.jpg";
        output.appendChild(img);
        ct+=1;
        counter.innerHTML = "Things Done: " + ct;
    });

    clickBtn.addEventListener("mouseover", function() {
        output.innerHTML = "Button is being hovered over";
        output.style.color = "red"; 
        ct+=1;
        counter.innerHTML = "Things Done: " + ct;
        
    });

    clickBtn.addEventListener("mouseout", function() {
        output.innerHTML = "Button is not being hovered over";
        output.style.color = ""; 
        ct+=1;
        counter.innerHTML = "Things Done: " + ct;
    });    

    dynBtn.addEventListener("focus", function() {
        output.innerHTML = "The Dynamic button is in focus";
        dynBtn.style.backgroundColor = "green";
        ct+=1;
        counter.innerHTML = "Things Done: " + ct;
    });

    dynBtn.addEventListener("blur", function() {
        output.innerHTML = "The Dynamic button was blurred";
        dynBtn.style.backgroundColor = "blue";
        ct+=1;
        counter.innerHTML = "Things Done: " + ct;
    });

}

function initializeApi() {

    //console.log("Here");
    var apiBtn = document.getElementById("apiBtn");
    var output2 = document.getElementById("output2");
    
    apiBtn.addEventListener("click", function() {
        $.post("http://35.188.215.226:8000/my_program",{"name":"Edward", "program":"cs"},post_back)
    });

    function post_back(data, status){
        output2.innerHTML = "";
        console.log("Post status");
        console.log(status);
        console.log("Post data");
        console.log(data);
        output2.innerHTML+= "Here are the current CS Classes: "
        let i = 0;
        for (i; i < data["Course"].length - 1; i++){
            output2.innerHTML += data["Course"][i] + ", ";
        }
        output2.innerHTML += data["Course"][i] + ". ";   
    }
}

