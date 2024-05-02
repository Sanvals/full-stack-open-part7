import { createSlice } from "@reduxjs/toolkit";
// import anecdotes from "../data/anecdotes"
import services from "../service/data"

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        addAnecdote(state, action) {
            const id = state.length + 1
            const newAnecdote = { ...action.payload, id }
            return [...state, newAnecdote]
        },
        addVote (state, action) {
          const id = action.payload
          const anecdote = state.map(a => a.id !== id ? a : { ...a, votes: a.votes + 1 })
          return anecdote
        },
        deleteAnecdote (state, action) {
          console.log("called deleteAnecdote")
          const id = action.payload
          const anecdote = state.filter(a => a.id !== id)
          return anecdote
        },
        setAnecdote(state, action) {
          return action.payload
        },
        setComment(state, action) {
          console.log("called setComment")
          // Add the comment to the anecdote
          const comment = action.payload
          const id = action.payload.id
          const anecdote = state.map(a => a.id !== id ? a : { ...a, comments: [...a.comments, comment] })
          return anecdote
        }
    }
})

export const { addAnecdote, addVote, deleteAnecdote, setAnecdote, setComment } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await services.getAll();
    dispatch(setAnecdote(anecdotes));
  };
};

export const createAnecdote = (content, id) => {
  return async dispatch => {
    const newAnecdote = await services.createNew(content)
    dispatch(setComment(newAnecdote))
  };
};

export const addComment = (comment, id) => {
  return async dispatch => {
    const newComment = await services.comment(comment, id)
    dispatch(addAnecdote(comment, id))
  }
};

export default anecdoteSlice.reducer