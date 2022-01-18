const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

const giveParcel = () => peopleWaiting.shift();
const leaveQueueWithoutParcel = () => peopleWaiting.pop();
let isLunch = false;
let timeBeforeLunch = 2;

while (peopleWaiting.length) {
    if (isLunch) {
        const leaveNamePeople = leaveQueueWithoutParcel();
        alert(`${leaveNamePeople} не получил(а) посылку и ушел(ла) из очереди`);

    } else {
        if (!timeBeforeLunch) {
            isLunch = !isLunch;
            alert(`И неожиданно сотрудница почты говорит, что скоро у них обеденный перерыв и она успеет обслужить только ${peopleWaiting[0]}`)
        }

        const leaveNamePeople = giveParcel();
        alert(`${leaveNamePeople} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);

        timeBeforeLunch -= 1;
    }



}