// to make this createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

// ${title} to take any parameter or making a variable
let viewStr
function CreateCard(title, cName, views, monthsOld, duration, thumbnail){
    // making html variable
    let html = `        <div class="card">
            <div class="image">
                <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
                    alt="">
            </div>
            <div class="text">
                <h1>${title}</h1> 
                <p>${cName} . ${viewStr} views . 2 months ago</p>
            </div>
        </div>`

}