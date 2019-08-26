console.log('WELCOME TO THE MAIN TING!')

const socket = io()
const canvas = document.getElementById('whiteboard')
// console.log('canvas', canvas)
canvas.addEventListener('mousemove', e => {
  //   console.log('e:', e)
  console.log('should emit!')
  socket.emit('drawing', { key1: 'wazzip', color: 'red' })
})

const initialCoords = {
  x: null,
  y: null
}

let drawing = false

canvas.addEventListener('mousedown', () => (drawing = true))
canvas.addEventListener('mouseup', () => (drawing = false))
canvas.addEventListener('mouseOut', () => (drawing = false))
canvas.addEventListener('mousemove', onMouseMove)

function onMouseMove(e) {
  if (!drawing) {
    return
  }
  initialCoords.x = e.clientX
  initialCoords.y = e.clientY
}


function draw(initialCoords) {
    initialCoords.
}

const context = {}
