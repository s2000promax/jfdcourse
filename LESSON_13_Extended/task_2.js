class CarService {

  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
  }

  constructor(name, workingHours = CarService.DefaultWorkingHours) {
    this.name = name;
    this.workingHours = workingHours;
  }

  repairCar(carName) {
    if (!carName) {
      console.error('Вам необходимо указать название машины, чтобы ее отремонтировать');
    } else if (this.#isGetTime()) {
      console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`);
    } else {
      console.log('К сожалению, мы сейчас закрыты. Приходите завтра');
    }
  }

  #isGetTime() {
    return (new Date().getHours() >= Number(this.workingHours.from.split(':')[0]))&&(new Date().getHours() <= Number(this.workingHours.till.split(':')[0]));
  }
}

const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');

const carSuperService = new CarService('RepairCarTomorrow');
carSuperService.repairCar('Tesla');
carSuperService.repairCar();