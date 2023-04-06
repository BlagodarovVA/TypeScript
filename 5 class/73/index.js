"use strict";
var TransferStatus;
(function (TransferStatus) {
    TransferStatus["Pending"] = "pending";
    TransferStatus["Rejected"] = "rejected";
    TransferStatus["Completed"] = "completed";
})(TransferStatus || (TransferStatus = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["NotFound"] = "Not found: 404";
    ErrorMessages["NotEnoughSpace"] = "Not enough space: 507";
    ErrorMessages["Forbidden"] = "Forbidden: 403";
})(ErrorMessages || (ErrorMessages = {}));
// Класс должен имплементировать ITransfer и TransferError
class SingleFileTransfer {
    // Место для реализаций
    // Необходимо создать метод checkTransferStatus, проверяющий состояние передачи данных
    // Можно вывести в консоль данные, можно вернуть строку
    // Необходимо создать метод, который будет останавливать передачу данных
    // И возвращать строку с причиной и датой остановки (Дата в любом формате)
    // Необходимо создать метод, который будет возвращать строку, содержащую
    // Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
    // Метод может показаться странным, но может использоваться для тестов, например
    path;
    data;
    date;
    status;
    message;
    start(p, d) {
        return `Start: ${p}, ${d}`;
    }
    stop(reason) {
        return `Stop: ${reason}. ${new Date().toTimeString()}`;
    }
    checkTransferStatus(status) {
        console.log(status);
    }
    errorTransf(status) {
        if (status == TransferStatus.Rejected) {
            return `Stop: ${ErrorMessages.NotFound}. Status: ${status}`;
        }
        else {
            return `Stop: ${ErrorMessages.NotEnoughSpace}. Status: ${status}`;
        }
    }
}
