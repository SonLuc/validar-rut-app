export const validateRut = (rut) => /^(\d{7,8})-(\d|k|K)$/.test(rut)
