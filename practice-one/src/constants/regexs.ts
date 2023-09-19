export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!*_])[A-Za-z\d@#$%^&+=!*_]{6,}$/

export const nameRegex = /^[A-Za-z\s]+$/

export const phoneNumberRegex = /^(\+\d{1,3}|\(\d{3}\)\s?\d{3}(-\d{4})?)$/

export const enrollNumberRegex = /^\d{8,}$/
