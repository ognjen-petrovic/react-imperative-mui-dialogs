import { Button } from '@mui/material'
import { usePrompt, useConfirm, useAlert } from '../../dist/ImperativeMuiDialogsContext';


function App() {
  const alert = useAlert()
  const confirm = useConfirm()
  const prompt = usePrompt()

  const openAlert = async () => {
    await alert('Hello world!');
  };

  const openConfirm = async () => {
    const question = 'Do you want to continue?'
    const answer = await confirm(question);
    console.log(question, answer)
  };

  const openPrompt = async () => {
    const question = 'My favorite dialog is with?'
    const defaultAanswer = 'myself'
    const answer = await prompt(question, defaultAanswer);
    console.log(question, answer)
  };
  return (
    <>
      <Button variant="outlined" onClick={openAlert}>
        Open alert dialog
      </Button>

      <Button variant="outlined" onClick={openConfirm} >
        Open confirm dialog
      </Button>

      <Button variant="outlined" onClick={openPrompt} >
        Open prompt dialog
      </Button>
      
    </>

  )
}

export default App
