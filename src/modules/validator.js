const validator = () => {
  const calculator = document.querySelector('.calc-block')
  const inputs = calculator.querySelectorAll('input')
  const names = document.querySelectorAll("[name=user_name]")
  const emails = document.querySelectorAll(".form-email")
  const phones = document.querySelectorAll(".form-phone")
  const message = document.querySelector('[name=user_message]')

  names.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\sА-Яа-я]+/g, '')
  
    })
  })
  message.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\w/g, '')
  })

  inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, '')
    })
  })
  emails.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\@\-\_\.\!\~\*\'\w]+/gi, '')
    })
  })
  phones.forEach((input) => {
    input.addEventListener('input', (e) => {

      const prefixNumber = (str) => {
        if (str === "7") {
          return "7 (";
        }
        if (str === "8") {
          return "+7 (";
        }
        if (str === "9") {
          return "7 (9";
        }
        return "7 (";
      };

      const input = e.target;
      /* вставляем плюс в начале номера */
      const value = input.value.replace(/\D+/g, "");
      /* длинна номера 11 символов */
      const numberLength = 11;

      /* Создаем переменную, куда будем записывать номер */
      let result;
      /* Если пользователь ввел 8... */
      if (input.value.includes("+8") || input.value[0] === "8") {
        /* Стираем восьмерку */
        result = "";
      } else {
        /* Оставляем плюсик в поле */
        result = "+";
      }

      /* Запускаем цикл, где переберем каждую цифру от 0 до 11 */
      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 0:
            /* в самом начале ставим префикс +7 ( */
            result += prefixNumber(value[i]);
            continue;
          case 4:
            /* добавляем после "+7 (" круглую скобку ")" */
            result += ") ";
            break;
          case 7:
            /* дефис после 7 символа */
            result += "-";
            break;
          case 9:
            /* еще дефис  */
            result += "-";
            break;
          default:
            break;
        }
        /* на каждом шаге цикла добавляем новую цифру к номеру */
        result += value[i];
      }
      /* итог: номер в формате +7 (999) 123-45-67 */
      input.value = result;
    })
  })
  // 
}

export default validator