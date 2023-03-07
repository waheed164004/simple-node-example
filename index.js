var rect = {                        //Initilize javascript object
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
    };

    function solvingRect(l,b){
        console.log("Solving For Rectangle l = " + l + "and b =" + b); //just for our convience
        if ( l <= 0 || b <= 0){
            console.log("length and width should be greater than 0");
        }
        else{
            console.log("Area of the rectangle is " + rect.area(l,b))
            console.log("Perimeter of the rectangle is " + rect.perimeter(l,b));
        }
    };
    solvingRect(2,5);
    solvingRect(-2,8);
    solvingRect(2,0);

