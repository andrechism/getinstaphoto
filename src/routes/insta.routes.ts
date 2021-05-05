import { Router } from "express";
import fetch from 'node-fetch'

const instaRoutes = Router();

instaRoutes.post("/", async (request, response) => {
    try {
        const {user_id, how_many} = request.body

        
        const link = `https://www.instagram.com/graphql/query/?variables=%7B%22id%22%3A%22${user_id}%22,%22first%22%3A${how_many}%7D&query_hash=bfa387b2992c3a52dcbe447467b4b771`

        const options = {
            headers: {
                cookie: 'ig_did=C7F9C827-6F3B-49AA-9A03-9DE30B041853; mid=YEafNQALAAFq0ow-MT4ueOqDPfO6; ig_nrcb=1; fbm_124024574287414=base_domain=.instagram.com; shbid=7954; shbts=1620054269.041156; csrftoken=pwuNJf9hQombnygYANjvwLbtEQWKKGTu; ds_user_id=47544171462; sessionid=47544171462%3AuMlmQAtg7f2TCy%3A8; rur=ATN; fbsr_124024574287414=f5zSqDDWFgR6oFxAbBqvgz8PiobmkF_c6pjdGMkOErQ.eyJ1c2VyX2lkIjoiMTAwMDY2NjYyMTA0MDI5IiwiY29kZSI6IkFRREJJT0hrTjZQbllIRVdtZU5EU2VOT2hjMlRLc05ra1JxcUJ4RmktMmFNb1REOEdOUkU1eDNzYlRMRWQ1QlFTY0lJanRMQS04QUU2Wjk1SnFzMEF4aVg2N0xTeExjT2FGdHJQbWZzMWJ0WXF2M09EVk9WVHBIazNxalVTOHJwSWVxd2h5bFNYM1JpbXM3VVotc3ZtbFduM1pHZUh6WEpmX2REMkNxZmk0QUxOak5CeDlmZEgxRGNteWg1RTFINThNWHkzRDBWQVBnVXhORlIwZng3dTZOSjlwT0ZYRmt6ZU1SUW1GQUR3XzBzMmZrajhRM2h2LUJ3SDdYNWxTcTRlMk43dTR2MXVrN1hpeWhkeFRCRVhxVmJiMGFMQnY1UWEwajJISzhFbWJYbnVtaGJzeDFEbzl2a1c3SXNDLXg1TEk2UkU2QW41LXgyMHk5aGp0b2hkanN2YjRqaEtkVHNtbWx2ZDlNTHBPSXZmUSIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFIb2gyMnpkNWllaElrRW9mNEhFMm1iRHhNWkNTSVJoM0ZPQnNqSVNBVk9QNGdaQ0N0UHNqYW1QTkhCVVIyNjNEZU9ESmJwWkFYcURHTFl3ZzA4WkF1MVpCcEV5bVFxOTRpYzZ1d2I2SzJ1WkI4ZlVRSnU5b3FzNFR6MEtEb01iQTdEWkJkS1JKZDhPcTBKTnB2czd6VGhobGhzWkFyNW8zMHBESEs1aXdScEVHaWx1ZVRscGl3VVpEIiwiYWxnb3JpdGhtIjoiSE1BQy1TSEEyNTYiLCJpc3N1ZWRfYXQiOjE2MjAxNzY0OTB9'
            }
        }
        const fetchResponse = await fetch(link, options)
        const data = await fetchResponse.json()

        return response.json(data)
    } catch(error) {
        return response.json({ error: error.message })
    }
});

export { instaRoutes };