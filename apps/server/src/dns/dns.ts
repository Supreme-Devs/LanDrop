import makeMdns from "multicast-dns";
const mdns = makeMdns();

export interface dnsData {
  name: string;
  type: string;
  data: Buffer[];
}

let listofDevices: dnsData[] = [];
export const serviceofDevices: dnsData[] = [];

(function connectToMdns() {
  console.log("mDNS discovery started");

  mdns.on("response", function (response: any) {
    response.answers?.forEach((element: any) => {
      if (!listofDevices.find((e) => e.name === element.name)) {
        listofDevices.push(element);
        console.log(listofDevices)
        
        if (
          element.name.includes("_mi-connect._udp.local") &&
          element.type === " TXT"
        ) {
          if (!serviceofDevices.find((e) => e.name === element.name)) {
            serviceofDevices.push(element);
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
        class: "IN",
      },
    ],
  });
})();

export { listofDevices };
