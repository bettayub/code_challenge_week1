function calculateSpeed() {
    let max = 70;
    let mySpeed = parseInt(document.getElementById("input_test").value);
    let points = (mySpeed - max) / 5;
    let result;

    if (points < 1) {
        result = 'OK';
    } else if (points >= 12) {
        result = "License Suspended";
    } else {
        result = "Points:Invalid Entry" + points ;
    }

    document.getElementById("result").innerText = result;
}
