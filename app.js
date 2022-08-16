let userId, customEvent;

//change user
document.getElementById("submit_userid").addEventListener("click", function () {
    userId = document.getElementById("change_userid").value;
    braze.changeUser(userId);

    alert("Submitted " + userId);
    analytics.track('First Visit');
});

//log custom attribtute
document.getElementById("submit_customevent").addEventListener("click", function () {
    customEvent = document.getElementById("add_customevent").value;
    analytics.track(customEvent);

    alert("Submitted custom event to Segment: " + customEvent);
});