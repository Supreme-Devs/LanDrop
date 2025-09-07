// creating a rtc server
import { messangerService } from "@/utils/signalChannel";

// creating the server class
export class webRTCPeer {
  private connection: RTCPeerConnection;

  constructor(configuration: object) {
    this.connection = new RTCPeerConnection(configuration);
  }

  async makeCall() {
    const pingingServer: { message: string } = messangerService.connect();
    if ((pingingServer && pingingServer.message != "")) {
      // setting up the ice candidate
      this.connection.onicecandidate = (event) => {
        if (event.candidate !== null) {
          // sending this to the signaling server
          messangerService.shareVal(event.candidate);
        } else {
          // for safe case scenario
          setTimeout(() => {
            this.connection.close();
          }, 3000);
        }

        //  creating offer for the server
        const func = async () => {
          const offer = await this.connection.createOffer();
          await this.connection.setLocalDescription(offer);
        };
        func();
      };
    }
  }
}

const configuration = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
};

const webRTCService = new webRTCPeer(configuration);

export { webRTCService };
