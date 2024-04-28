import { useParams, Link } from "react-router-dom";

const AnecdoteList = ({ anecdotes }) => {
  const { id } = useParams();
  const content = anecdotes.find((a) => a.id === Number(id));

  if (content) {
    return <h2>{content.content}</h2>;
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map((a) => (
          <li key={a.id}>
            <Link to={`/${a.id}`}>{a.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
