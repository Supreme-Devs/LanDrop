// creating a rtc server

import { StringWidthOptions } from "bun";

const signalingChannel = 


// creating the server class
export class webRTCPeer {
  connection = new RTCPeerConnection();

  constructor(connection: any) {
    this.connection = connection;
  }
  
async function makeCall() {
    const configuration = {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]}
    const peerConnection = new RTCPeerConnection(configuration);
    signalingChannel.addEventListener('message', async (message: {answer:}) => {
        if (message.answer) {
            const remoteDesc = new RTCSessionDescription(message.answer);
            await peerConnection.setRemoteDescription(remoteDesc);
        }
    });
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    signalingChannel.send({'offer': offer});
}
}
