import React from "react"
import Button from "./ui/button"

const SessionCard = ({ data, deleteSession }) => {
  
  const styles = {
    default: "size-60 p-4 rounded-xl border border-2 tracking-tight",
    high: "bg-linear-to-b from-red-300 via-red-300 to-white border-red-200",
    medium:
      "bg-linear-to-b from-orange-300 via-orange-300 to-white border-orange-200",
    low: " bg-linear-to-b from-green-300 via-green-300 to-white border-green-200",
    neutral: "bg-neutral-200",
  }

  const handleDelete = (id) => {
    deleteSession(id)
  }

  return (
    <div
      className={`${styles.default} ${data.priority === "High" ? styles.high : data.priority === "Medium" ? styles.medium : data.priority === "Low" ? styles.low : styles.neutral}`}
    >
      <p className='text-2xl font-medium first-letter:uppercase text-white wrap-break-word'>
        {data.topic}
      </p>
      <p>{data.subject}</p>
      <p>{data.duration} mins</p>
      <p>{data.priority}</p>
      <p>{data.date}</p>
      <Button onClick={() => handleDelete(data.id)} variant='ghost'>
        Delete
      </Button>
    </div>
  )
}

export default SessionCard
