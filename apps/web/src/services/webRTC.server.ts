// creating a rtc server
import { messangerService } from "@/utils/signalChannel"; 


// creating the server class
export class webRTCPeer {
 private connection = new RTCPeerConnection();

  constructor(configuration : object) {
   this.connection.setConfiguration(configuration)
  }
  
async  makeCall() {
   
     const pingingServer = messangerService.connect()
     if(pingingServer){

     }
    // signalingChannel.addEventListener('message', async (message: {answer:}) => {
    //     if (message.answer) {
    //         const remoteDesc = new RTCSessionDescription(message.answer);
    //         await peerConnection.setRemoteDescription(remoteDesc);
    //     }
    // });
    const offer = await this.connection.createOffer();
    await this.connection.setLocalDescription(offer);
    messangerService.shareVal(offer)
}
}
 const configuration = {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]}
const webRTCService = new webRTCPeer(configuration)