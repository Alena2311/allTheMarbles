let presentCount = 0;

function registerAttendance(students) {
    return students.map((student) => {
        if (!student.status) {
            student.status = { present: false };
        }

        if ((student.status.present === true)) {
            presentCount++;
        }
        
        return student.name + " is " + (student.status.present ? "present" : "absent");
    });
}

const students = [
    { name: "Ava" },
    { name: "Noah", status: { present : false } },
    { name: "Mia", status: { present: true } },
];

console.log(registerAttendance(students));
console.log(presentCount);
console.log(students);