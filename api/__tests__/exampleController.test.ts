import request from 'supertest'
import { app, server } from '../src/index'

afterAll(() => {
  server.close()
})

describe('GET /api/example', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/api/example')
    expect(response.status).toBe(200)
  })
})
