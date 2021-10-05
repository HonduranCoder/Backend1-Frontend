import request from "superagent";

export async function getHalloweenCharacters(){
    const response = await request.get(`https://halloweencharacters.herokuapp.com/halloween-characters`)
    return response.body;
}

export async function getCategories(){
    const response = await request.get(`https://sql1-app.herokuapp.com/categories`)
    return response.body;
}

export async function getHalloweenCharacter(id){
    const response = await request.get(`https://halloweencharacters.herokuapp.com/halloween-characters/${id}`)
    return response.body;
}