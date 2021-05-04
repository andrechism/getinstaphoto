import { Router } from "express";
import fetch from 'node-fetch'

const instaRoutes = Router();

instaRoutes.post("/", async (request, response) => {
    try {
        const {user_id, how_many} = request.body

        
        const link = `https://www.instagram.com/graphql/query/?variables=%7B%22id%22%3A%22${user_id}%22,%22first%22%3A${how_many}%7D&query_hash=bfa387b2992c3a52dcbe447467b4b771`
        const fetchResponse = await fetch(link)
        const data = await fetchResponse.json()

        return response.json(data)
    } catch(error) {
        return response.json({ error: error.message })
    }
});

export { instaRoutes };