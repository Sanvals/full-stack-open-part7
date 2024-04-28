import { useNavigate } from "react-router-dom";
import { useField } from "../hooks";
import { addAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const CreateNew = ({ addNew }) => {
  const dispatch = useDispatch()
  const content = useField("content");
  const author = useField("author");
  const info = useField("info");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addAnecdote({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    }))

    navigate("/");
  };

  const handleReset = () => {
    content.reset();
    author.reset();
    info.reset();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button>create</button>
        <button type="button" onClick={() => handleReset()}>
          reset
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
