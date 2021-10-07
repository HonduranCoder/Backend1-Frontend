import request from "superagent";

export async function getHalloweenCharacters(){
    const response = await request.get(`https://sql1-app.herokuapp.com/halloween-characters`)
    return response.body;
}

export async function getCategories(){
    const response = await request.get(`https://sql1-app.herokuapp.com/categories`)
    return response.body;
}

export async function getHalloweenCharacter(id){
    const response = await request.get(`https://sql1-app.herokuapp.com/halloween-characters/${id}`)
    return response.body;
}

export async function deleteHalloweenCharacter(id){
    const response = await request.delete(`https://sql1-app.herokuapp.com/halloween-characters/${id}`)
    console.log(response.body)
    return response.body
}

export async function createHalloweenCharacters(halloweenCharacters){
    const response = await request.post(`https://sql1-app.herokuapp.com/halloween-characters`)
    .send(halloweenCharacters)
    console.log(response.body)
    return response.body;
}

export async function editHalloweenCharacter(id, newHalloweenCharacter){
    const response = await request.put(`https://sql1-app.herokuapp.com/halloween-characters/${id}`)
    .send(newHalloweenCharacter)

    return response.body
}