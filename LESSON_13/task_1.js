class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.technologies = [];
    this.status = 'Junior';
  }

  setTechnologies(technologies) {
    this.technologies = [
      ...this.technologies,
      ...technologies,
    ];
  }
  setNewStatus(newStatus) {
    this.status = newStatus;
  }
}
const student = new Student ('Maxim', 20);
student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
student.setNewStatus('Middle');
console.log(student);

const senior = new Student ('Vasya', 30);
senior.setTechnologies([ 'HTML', 'CSS', 'JavaScript', 'NodeJS' ]);
senior.setNewStatus('Senior');
console.log(senior);