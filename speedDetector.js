let mySpeed = 133;
let max = 70;
let points = (mySpeed - max) / 5;
let result;

if (points < 1) {
    result = 'OK';
} else if (points >= 12) {
    result = 'License Suspended';
} else {
    result = 'Points: ' + points;
}

 console.log(result);
