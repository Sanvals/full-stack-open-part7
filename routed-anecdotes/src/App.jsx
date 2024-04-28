import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import AnecdoteList from "./components/AnecdoteList";

const App = () => {
  /*
  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);
  */

  /*
  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };
  */

  return (
    <div>
      <h1>Software anecdotes</h1>
      <div>{useSelector(state => state.notification)}</div>
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
