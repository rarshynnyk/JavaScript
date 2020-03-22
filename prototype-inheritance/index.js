/*
Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока.
Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
surname (фамилия, наследуется от User), year (год поступления в вуз).
Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
Текущий год получите самостоятельно.
*/

const User = function (name, surname) {
  this.name = name;
  this.surname = surname;
}

User.prototype.getFullName = function() {
  return `${this.name} ${this.surname}`
}

const Student = function (name, surname, entryYear) {
  User.apply(this, arguments);
  this.entryYear = entryYear;
}

Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

Student.prototype.getCourse = function () {
  return new Date().getFullYear() - this.entryYear
}

const student = new Student('John', 'Doe', 2017)