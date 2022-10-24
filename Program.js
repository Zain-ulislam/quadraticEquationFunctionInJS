//Function to solve Quadratice Equation

function quadEq(a,b,c){
    var discriminant =((b*b)-4*(a*c));
    console.log("The discriminant  is "+discriminant );
    if(discriminant > 0){
    let postivieRoot=(-b+Math.sqrt(discriminant))/2*a;
    let negativeRoot=(-b-Math.sqrt(discriminant))/2*a;
    console.log("The Solution is: "+ postivieRoot +" "+negativeRoot);}
    else if(discriminant == 0 ){
        let postivieRoot=(-b/(2*a));
        let negativeRoot=(-b/(2*a));
        console.log("The Solution is: "+ postivieRoot +" "+negativeRoot);
    }
    else {
         let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log("The Solution is: "+ realPart +" "+ imagPart+"i");
    }
    
}

quadEq(1,-4,4);