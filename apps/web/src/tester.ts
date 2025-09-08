import { webRTCService } from "./services/webRTC.server"
import { use, useEffect } from "react"

useEffect(()=>{
webRTCService.makeCall()
}, [])


