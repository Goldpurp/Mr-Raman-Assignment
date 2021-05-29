let doctor = {
    lastname: "Aregbe", firstname: "Azeez", age: 50, address: "57 ibd dende street", email: "Azeezaregbe@gmail.com",
    hospitalRecord: function () {
        return this.lastname
    },
    clinicRecord: function () {
        return this.firstname
    },
    clinicAge: function (a, b) {
        let add = this.age + 5
        return add
    }
}
console.log(doctor.hospitalRecord());
console.log(doctor.clinicRecord());
console.log(doctor.clinicAge());









