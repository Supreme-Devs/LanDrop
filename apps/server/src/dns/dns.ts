import makeMdns from "multicast-dns";
const mdns = makeMdns({
  interface: " 192.168.1.3", // Your WiFi IP address
  port: 5353, // Standard mDNS port
  ip: "224.0.0.251", // mDNS multicast address
  ttl: 255, // Time to live for packets
  loopback: true, // Include your own device
  reuseAddr: true,
});
const Devices: any[] = [];

(function connectToMdns() {
  mdns.on("response", function (response: any) {
    console.log("got a response packet:", response);
    Devices.push(response);
  });

  mdns.on("query", function (query) {
    console.log("got a query packet:", query);
    //  console.log("authorities: ", query.authorities)
  });

  // mdns.query([{name : 'Android-6.local',
  //     type: 'A'
  // }], (error: any)=>{
  //     console.log(error)
  // })
})();

export { Devices };
