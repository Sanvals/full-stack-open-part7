import { createSlice } from "@reduxjs/toolkit";
import anecdotes from "../data/anecdotes"

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: anecdotes,
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
        }
    }
})

export const { addAnecdote, addVote, deleteAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer