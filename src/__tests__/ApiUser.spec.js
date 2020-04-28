import SuperTest from 'supertest'

let server = SuperTest.agent('http://localhost:3000/api/users')
let dummyUser = { email: "user@dummy.com", password: "qwerty" }

describe('Users API', () => {
    it('POST/signup responds with code 200 if the request was successful', (done) => {

        server.post("/signup")
        .send(dummyUser)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            done()
        })
    })
    it('POST/login responds with code 200 if the request was successful', (done) => {

        server.post("/login")
        .send(dummyUser)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            done()
        })
    })
})