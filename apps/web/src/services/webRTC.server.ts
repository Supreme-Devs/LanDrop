// creating a rtc server

// creating the server class
export class webRTCPeer {
  connection = new RTCPeerConnection();

  constructor(connection: any) {
    this.connection = connection;
  }
}
