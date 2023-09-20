export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!*_])[A-Za-z\d@#$%^&+=!*_]{6,}$/

export const nameRegex = /^[A-Za-z0-9\s\u00C0-\u024F\u1E00-\u1EFF']+$/

export const phoneNumberRegex = /^(03|05|07|08|09)[0-9]{8}$/

export const enrollNumberRegex = /^\d{8,}$/
