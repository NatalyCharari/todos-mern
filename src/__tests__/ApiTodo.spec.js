import SuperTest from 'supertest'

let server = SuperTest.agent('http://localhost:3000/api')
let commonHeaders = {"authorization": ""}

beforeAll((done) => {
    const dummyUser = { email: "abc@live.com", password: "qwerty" }

    server.post("/users/signup")
    .send(dummyUser)
    .expect(200)
    .end((err, res) => {
        if (err) return done(err)
        commonHeaders = {"authorization": "bearer " + res.body.token}
        done()
    })
})
                    
describe('ToDos API', () => {
    it('POST/ responds with code 200 if the request was successful', (done) => {

        const todo = { title: 'My test task', description: 'My test description'}
        
        server.post("/todos")
        .send(todo)
        .set(commonHeaders)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            done()
        })
    })
    it('GET/ responds with code 200 if the request was successful', (done) => {

        server.get("/todos")
        .set(commonHeaders)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            done()
        })
    })
    it('GET/:id responds with code 200 if the request was successful', (done) => {

        const id = '5d0df802422ce027c4f5d702'

        server.get('/todos/' + id)
        .set(commonHeaders)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            done()
        })
    })
    it('PUT/:id responds with code 200 if the Todo was added', (done) => {

        const id = '5d0df802422ce027c4f5d70'
        const todo = { title: 'My test task', description: 'My test description 2'}

        server.put('/todos/' + id)
        .send(todo)
        .set(commonHeaders)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            done()
        })
    })
    it('DELETE/:id responds with code 200 if the Todo was added', (done) => {

        const id = '5d0df802422ce027c4d70'

        server.delete('/todos/' + id)
        .set(commonHeaders)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            done()
        })
    })
})