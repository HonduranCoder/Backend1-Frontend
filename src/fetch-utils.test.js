import { getHalloweenCharacters, getHalloweenCharacter, } from "./fetch-utils.js";

test('Halloween Characters', async()=>{
    const expectation ={
        id: expect.any(Number), 
        image: expect.any(String),
        name: expect.any(String), 
        movie: expect.any(String),
    }
    const response = await getHalloweenCharacters(); 
    expect(response[0]).toEqual(expectation)
}) 

test('Halloween Characters-one', async()=>{
    const expectation ={
        id:1, 
        image: expect.any(String),
        name: expect.any(String), 
        movie:expect.any(String), 
    }; 
    const response = await getHalloweenCharacter(1); 
    expect(response).toEqual(expectation)
});

test('get categories', async()=>{
    const expectation={
        id: expect.any(Number), 
        image: expect.any(String),
        name: expect.any(String), 
        movie: expect.any(String),
    }
    const response = await getHalloweenCharacters(); 
    expect(response[0]).toEqual(expectation)
})
