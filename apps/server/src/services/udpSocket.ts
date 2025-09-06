// create udp socket through bun

const server = await Bun.udpSocket({
  socket: {
    data(socket, buf, port, addr) {
      console.log(`message from ${addr}:${port}:`);
      console.log(buf.toString());
    },
  },
});

const client = await Bun.udpSocket({


});

// client.send("Hello!", 41234, "255.255.255.255");


