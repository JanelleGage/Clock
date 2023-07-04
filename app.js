const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

function setDate() {
  const now = new Date();

  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()
  const currentSecond = now.getSeconds()

  const hourDeg = (currentHour / 12) * 360
  const minuteDeg = (currentMinute / 60) * 360
  const secondDeg = (currentSecond / 60) * 360

  hour.style.transform = `rotate(${hourDeg}deg)`
  minute.style.transform = `rotate(${minuteDeg}deg)`
  second.style.transform = `rotate(${secondDeg}deg)`
}

setInterval(setDate, 1000)