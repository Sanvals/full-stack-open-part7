import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { Container } from "@mui/material";


import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const App = () => {
  const notification = useSelector(state => state.notification)
  const oldNotification = (
    <div>{useSelector(state => state.notification)}</div>
  )

  return (
    <Container>
      <h1>Software anecdotes</h1>
      { 
      notification && 
        <Alert 
          variant="filled"
          severity="success"
          style={{position: "absolute", zIndex: "1000"}}>
            {notification}
        </Alert>
      }
      <Menu />
      <Footer />
    </Container>
  );
};

export default App;
