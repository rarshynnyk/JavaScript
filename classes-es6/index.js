/*
Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока.
Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
surname (фамилия, наследуется от User), year (год поступления в вуз).
Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
Текущий год получите самостоятельно.
*/

class User {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }

  getFullName = () => `${this.name} ${this.surname}`
}

class Student extends User {
  constructor(name, surname, entryYear) {
    super(name, surname)

    this.entryYear = entryYear 
  }

  getCourse = () => new Date().getFullYear() - this.entryYear
}

const student1 = new Student('John', 'Doe', 2019)