

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



function formatCoordinate(
    coordinate: readonly [number, number, string]
): string {
    const latitude = coordinate[0];
    const longitude = coordinate[1]
    const locationName = coordinate[2];
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

(formatCoordinate([23.81, 90.41, "Dhaka"]));

(formatCoordinate([22.35, 91.78, "Chittagong"]));