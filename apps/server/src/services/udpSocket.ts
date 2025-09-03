// create udp socket through bun

const socket = await Bun.udpSocket({})
console.log(socket)