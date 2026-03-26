import { useContext } from "react"
import { SessionContext } from "@/stores/sessionContext"
import SessionCard from "./sessionCard"

const SessionList = () => {
  const { sessions, deleteSession } = useContext(SessionContext)
  return (
    <div className='grid grid-cols-5 gap-y-4 gap-x-4 mt-4'>
      {sessions.map((i) => {
        return (
          <SessionCard key={i.topic} data={i} deleteSession={deleteSession} />
        )
      })}
    </div>
  )
}

export default SessionList
