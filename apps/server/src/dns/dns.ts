import makeMdns from "multicast-dns";
import type { isObjectBindingPattern } from "typescript";
const mdns = makeMdns();

const Devices: any[] = [];

let listofDevices: any[] = [];

(function connectToMdns() {
  // mdns.on("response", function (response: any) {
  //   // console.log("got a response packet:", response.answers);
  //   response.answers?.forEach((element: { name: any }) => {
  //     if (listofDevices.includes(element.name)) return;
  //     else {
  //       listofDevices.push(element.name);
  //     }
  //   });
  //   console.log(listofDevices);
  // });

  mdns.on("query", function (query) {
    console.log("got a query packet:", query);
    //  console.log("authorities: ", query.authorities)
  });

mdns.query({
  questions:[{
    name: '_services._dns-sd._udp.local',
    type: 'PTR',
    class: "IN"
  }]
})
})();

export { Devices };
