function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsThreshold = 12;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        
        console.log(`Points: ${demeritPoints}`);

        
        if (demeritPoints > pointsThreshold) {
            console.log("License suspended");
        }
    }
}


checkSpeed(70); 

