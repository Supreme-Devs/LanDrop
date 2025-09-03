import makeMdns from "multicast-dns";
const mdns = makeMdns();

let listofDevices: any[] = [];
let serviceofDevices: any[] = [];

(function connectToMdns() {
  console.log("mDNS discovery started");

  mdns.on("response", function (response: any) {
    response.answers?.forEach((element: any) => {
      if (!listofDevices.find((e) => e.name === element.name)) {
        listofDevices.push(element);
        console.log(listofDevices)

        if (element.name.includes("_mi-connect._udp.local") && element.type === " TXT") {
          if (!serviceofDevices.find((e) => e.name === element.name)) {
            serviceofDevices.push(element);
            console.log(serviceofDevices)
          }
        }
      }
    });
  });

  // Send query to discover service types
  mdns.query({
    questions: [
      {
        name: "_services._dns-sd._udp.local",
        type: "PTR",
      },
    ],
  });

})();

export {listofDevices}