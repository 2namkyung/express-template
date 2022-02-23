import 'regenerator-runtime'
import request from 'supertest'
import app from '../app'

describe('multipart/form-data infura url', ()=>{

    it('default test code', async () =>{

        const response = await request(app)
           .get('/')
           .expect('Content-Type', /json/)
           .expect(200)
           
        expect(response.body.data).toBe("success")
    })
})  