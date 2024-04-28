import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    content: "If it hurts, do it more often",
    author: "Jez Humble",
    info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
    votes: 0,
    id: 1,
  },
  {
    content: "Premature optimization is the root of all evil",
    author: "Donald Knuth",
    info: "http://wiki.c2.com/?PrematureOptimization",
    votes: 0,
    id: 2,
  },
]

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: initialState,
    reducers: {
        addAnecdote(state, action) {
            const id = state.length + 1
            const newAnecdote = { ...action.payload, id }
            return [...state, newAnecdote]
        },
        addVote (state, action) {
          const id = action.payload
          const anecdote = state.map(a => a.id !== id ? a : { ...a, votes: a.votes + 1 })
        }
    }
})

export const { addAnecdote, addVote } = anecdoteSlice.actions
export default anecdoteSlice.reducer