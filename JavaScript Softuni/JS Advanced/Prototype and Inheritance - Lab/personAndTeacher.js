function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {

            super(name, email)
            this.subject = subject;

        }
    }
// console.log(new Teacher('Krasimir', 'krasimirkostadinov9@gmail.com', 'SoftUni'));
    return {
        Person,
        Teacher
    }

}


