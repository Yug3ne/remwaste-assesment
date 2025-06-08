import { Button } from "@/components/ui/button"
import { ModeToggle } from "./components/modeToggle"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center slate">
      <Button>Click me</Button>
      <ModeToggle/>
    </div>
  )
}

export default App