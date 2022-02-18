export const timeDifference = (timeAgo: number) => {
  const currentTime = new Date().getTime()
  const millisecondsTime = timeAgo * 1000

  const timeInOneDay = 1000 * 60 * 60 * 24
  const timeInOneHour = 1000 * 60 * 60
  const timeInOneMinute = 1000 * 60

  const diffInTime = Math.floor(currentTime - millisecondsTime)

  const diffInDays = Math.floor(diffInTime / timeInOneDay)
  const diffInHour = Math.floor(diffInTime / timeInOneHour)
  const diffInMinute = Math.ceil(diffInTime / timeInOneMinute)

  if (diffInDays > 1) {
    return `${diffInDays} dias`
  }

  if (diffInDays === 1) {
    return `${diffInDays} dia`
  }

  if (diffInHour === 1) {
    return `${diffInHour} hora`
  }

  if (diffInHour > 1) {
    return `${diffInHour} horas`
  }

  if (diffInMinute > 1 && diffInHour === 0) {
    return `${diffInMinute} minutos`
  }

  if (diffInMinute === 1 && diffInHour === 0) {
    return `${diffInMinute} minuto`
  }
}
