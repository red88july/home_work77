
import {Box, Button, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FileInput from '../FileInput/FileInput';

const InputForm = () => {
  return (
    <Box sx={{marginTop: 10}}>
      <form>
        <Box display="flex" flexDirection="column">
          <TextField
            id="authorInput"
            name="author"
            label="Input author message"
            sx={{marginBottom: 3}}
          />
          <TextField
            id="messageInput"
            name="message"
            label="Input message"
            multiline
            rows={4}
            sx={{marginBottom: 3}}
          />
            <FileInput
              onChange={() => {}}
              name="image"
              label="Choose file"
            />
          <Box maxWidth="sx">
            <Button
              startIcon={<SendIcon/>}
              variant="contained"
              color="primary"
              type="submit">
              Send
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default InputForm;