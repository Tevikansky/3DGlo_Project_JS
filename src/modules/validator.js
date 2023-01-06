const validator = () => {
  const calculator = document.querySelector('.calc-block')
  const inputs = calculator.querySelectorAll('input')
  const names = document.querySelectorAll("[name=user_name]")
  const emails = document.querySelectorAll(".form-email")
  const phones = document.querySelectorAll(".form-phone")
  const message = document.querySelector('[name=user_message]')

  names.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\w/g, '')
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
      e.target.value = e.target.value.replace(/[^\-\)\(\d]+/g, '')
    })
  })
}

export default validator