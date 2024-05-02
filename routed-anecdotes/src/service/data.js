import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return await request.data
}

const createNew = async (content) => {
    const response = await axios.post(baseUrl, content)
    return response.data
}

const comment = async (comment, id) => {
    const response = await axios.post(`${baseUrl}/${id}/comment/`, { content: comment })
    return response.data
}

export default { getAll, createNew, comment }