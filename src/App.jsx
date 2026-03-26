import { Plus } from "lucide-react"
import { useState } from "react"
import Container from "./components/general/container"
import SessionForm from "./components/sessionForm"
import SessionList from "./components/sessionList"
import TotalStudyDuration from "./components/totalStudyDuration"
import Button from "./components/ui/button"

const App = () => {
  const [formView, setFormView] = useState(false)

  return (
    <div>
      <Container className={"w-full mt-2"}>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-medium tracking-tight'>Dashboard</h1>
          <div className='flex gap-4 items-center'>
            <TotalStudyDuration />
            <Button
              onClick={() => setFormView(!formView)}
              className={"flex gap-2 items-center px-2.5! py-1.5!"}
            >
              <Plus className='size-4' />
              Session
            </Button>
          </div>
        </div>
        {formView ? (
          <div className='w-full flex justify-center'>
            <SessionForm setFormView={setFormView} />
          </div>
        ) : (
          <SessionList />
        )}
      </Container>
    </div>
  )
}

export default App
