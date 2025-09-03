import makeMdns from "multicast-dns";
const mdns = makeMdns();

let listofDevices: any[] = [];
let serviceofDevices: any[] = [];

(function connectToMdns() {
  mdns.on("response", function (response: any) {
    // console.log("got a response packet:", response.answers);
    response.answers?.forEach((element: any) => {
      if (listofDevices.includes(element)) return;
      else {
        listofDevices.push(element);
        if (
          element.name ==
            '{"nm":"fing#","as":"[8193, 8194]","ip":"4"}._mi-connect._udp.local' &&
          element.type == "SRV"
        ) {
          if (serviceofDevices.includes(element)) return;
          else {
            serviceofDevices.push(element);
          }
        }
      }
    });
  });
    
  // logging the arrays
  console.log("List of Devices:", listofDevices);
  console.log("Service of Devices:", serviceofDevices); 
  

  // mdns.on("query", function (query) {
  //   console.log("got a query packet:", query);
  //   //  console.log("authorities: ", query.authorities)
  // });

  mdns.query({
    questions: [
      {
        name: '{"nm":"fing#","as":"[8193, 8194]","ip":"4"}._mi-connect._udp.local',
        type: "SRV",
        class: "IN",
      },
    ],
  });
})();

export { listofDevices, serviceofDevices };
