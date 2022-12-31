
const allButtons = document.querySelectorAll(".buttons .btn")   // selected all buttons
const notifications = document.querySelector(".notifications")  // selected ul

const alertDetails = {
    timer : 5000,
    success: {
        icon : "fa-circle-check",
        text : "Success: This is a success alert",
    },
    error: {
        icon : "fa-circle-xmark",
        text : "Error: This is an Error alert",
    },
    warning: {
        icon : "fa-triangle-exclamation",
        text : "Warning: This is a warning alert",
    },
    info: {
        icon : "fa-circle-info",
        text : "Info: This is an info alert",
    },
}

const removeAlert = (alerts)=>{
    alerts.classList.add("hide");
    if(alerts.timeoutId){
        clearTimeout(alerts.timeoutId)
    }
    setTimeout(alerts.remove(),100) // removing the alerts after a spcific time
}

const createAlerts = (id)=>{
    const {icon,text} = alertDetails[id];   // getting the icon and text for the alert based on the id passed
    const alerts = document.createElement("li");    // creating a list to be shown as alert
    alerts.className = `alerts ${id}`;  // addin classname in the li
    // set the inner html of the li
    alerts.innerHTML = `<div class="column">
                            <i class="fa-solid ${icon}"></i>
                            <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onClick="removeAlert(this.parentElement)"></i>`
    // append the li in the ul
    notifications.append(alerts);
    // setting timeout to remove the alert after a time duration
    alerts.timeoutId = setTimeout(() => {removeAlert(alerts);}, alertDetails.timer);
}

// adding events for all buttons
allButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        createAlerts(btn.id)
    })
})



