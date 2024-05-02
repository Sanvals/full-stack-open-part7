const express = require('express')
const app = express()
// const { data } = require('./db.json')

let data = [
    {
      "content": "If it hurts, do it more often",
      "author": "Jez",
      "info": "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      "votes": 0,
      "comments": ["Good, bro", "So so, bro", "Bad, bro"],
      "id": 1
    },
    {
      "content": "Premature optimization is the root of all evil",
      "author": "Knuth",
      "info": "http://wiki.c2.com/?PrematureOptimization",
      "votes": 0,
      "comments": [],
      "id": 2
    },
    {
      "content": "Lorem Ipsum",
      "author": "Knuth",
      "info": "http://www.google.es/",
      "votes": 0,
      "comments": [],
      "id": 3
    },
    {
      "content": "Canvas is awesome",
      "author": "Knuth",
      "info": "http://www.reddit.com",
      "votes": 0,
      "comments": [],
      "id": 4
    },
    {
      "content": "Google Search for dummies",
      "author": "Jez",
      "info": "http://wiki.c2.com/?PrematureOptimization",
      "votes": 0,
      "comments": [],
      "id": 5
    },
    {
      "content": "Data loaded correctly",
      "author": "Jez",
      "info": "http://wiki.c2.com/?PrematureOptimization",
      "votes": 0,
      "comments": [],
      "id": 6
    }
  ]

const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.json(data)
})

app.get('/:id', (request, response) => {
  const id = request.params.id
  const anecdote = data[id]

  if (anecdote) {
    response.json(anecdote)
  } else {
    response.status(404).end()
  }
})

const generateId = () => {
  const maxId = data.length > 0
    ? Math.max(...data.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/', (request, response) => {
  const body = request.body
  const newAnecdote = {
    content: body.content,
    author: body.author,
    info: body.info,
    votes: 0,
    comments: [],
    id: generateId()
  }
  data.push(newAnecdote)
})

app.post('/:id/comment/', (request, response) => {
  const id = Number(request.params.id)
  const comment = request.body.content
  const anecdote = data.find(a => a.id === id)
  console.log(anecdote)
  const newAnecdote = {
    ...anecdote,
    comments: [...anecdote.comments, comment]
  }
  data = data.map(a => a.id !== id ? a : newAnecdote)
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})