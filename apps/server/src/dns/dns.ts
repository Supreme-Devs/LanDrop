import makeMdns from "multicast-dns";
const mdns = makeMdns();

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
