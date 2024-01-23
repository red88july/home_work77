import AppToolbar from './components/AppToolbar/AppToolbar';
import InputForm from './components/InputForm/InputForm';
import {Container, CssBaseline} from '@mui/material';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <>
      <CssBaseline>
        <header>
          <AppToolbar/>
        </header>
        <main>
          <Container maxWidth="lg">
            <InputForm/>
            <Posts />
          </Container>
        </main>
      </CssBaseline>
    </>
  )
}

export default App;