import { useContext } from "react"
import { SessionContext } from "@/stores/sessionContext"

const TotalStudyDuration = () => {
  const { sessions } = useContext(SessionContext)

  let totalStudyDuration = 0
  sessions.forEach((e) => {
    totalStudyDuration += e.duration
  })

  return (
    <div>
      <p>Total Study Duration: {totalStudyDuration} mins </p>
    </div>
  )
}

export default TotalStudyDuration
