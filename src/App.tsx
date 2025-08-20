import './App.css'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'

function App() {

  return (
    <>
    <h1>Plate Vision</h1>
    <Button variant='contained' color='primary'>
      Clique aqui
    </Button>
    <Button startIcon={<DeleteIcon/>}></Button>
    </>
  )
}

export default App
