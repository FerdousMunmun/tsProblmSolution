

function multiplyValue (value: number, multiplier?: number): number {
    if(multiplier === undefined){
        multiplier = 2
    }
    return value * multiplier
}




 (multiplyValue(10)),
 (multiplyValue(10, 5)),
(multiplyValue(7,0))





function processInput(value: string | number | boolean): string | number {

    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }

    else if (typeof value === "number") {
        return value * 10;
    }

    else {
        return value ? "Active" : "Inactive";
    }

}


(processInput(" Typescript ")),
(processInput(7)),
(processInput(true)),
(processInput(false))