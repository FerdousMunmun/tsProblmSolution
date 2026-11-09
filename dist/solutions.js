function multiplyValue(value, multiplier) {
    if (multiplier === undefined) {
        multiplier = 2;
    }
    return value * multiplier;
}
(multiplyValue(10)),
    (multiplyValue(10, 5)),
    (multiplyValue(7, 0));
function processInput(value) {
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
    (processInput(false));
function formatCoordinate(coordinate) {
    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
(formatCoordinate([23.81, 90.41, "Dhaka"]));
(formatCoordinate([22.35, 91.78, "Chittagong"]));
function concatenateArrays(...arrays) {
    return arrays.flat();
}
(concatenateArrays(["a", "b"], ["c", "d"]));
(concatenateArrays([1, 2], [3, 4], [5]));
function getPopularCourses(courses, minStudents) {
    return courses.filter((course) => {
        return course.isPublished === true &&
            course.students >= minStudents;
    });
}
const courses = [
    {
        title: "TypeScript Mastery",
        students: 120,
        isPublished: true
    },
    {
        title: "Draft Course",
        students: 200,
        isPublished: false
    },
    {
        title: "Basic HTML",
        students: 45,
        isPublished: true
    },
    {
        title: "Next.js Pro",
        students: 85,
        isPublished: true
    }
];
console.log(getPopularCourses(courses, 80));
// ------------------------------
function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
// Sample Data
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
// Function Calls
console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));
console.log(pluckValues(users, "role"));
export {};
