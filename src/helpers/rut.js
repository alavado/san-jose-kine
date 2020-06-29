export const formatearRUT = rut => {
  if (rut.length === 10) {
    return `${rut.slice(0, 2)}.${rut.slice(2, 5)}.${rut.slice(5)}`
  }
  else {
    return `${rut.slice(0, 1)}.${rut.slice(2, 5)}.${rut.slice(5)}`
  }
}