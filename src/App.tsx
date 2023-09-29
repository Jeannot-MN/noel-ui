
import { Button, Calendar, Input, Label } from '../lib/main'
import './App.css'

function App() {

  return (
    <>
      <Button 
        variant='destructive'
        size='lg'
      >
        Click me
      </Button>

      <Calendar/>

      <Label htmlFor='input'>This is a label</Label>
      <Input 
        name='id'
      
      />
    </>
  )
}

export default App
