import 'reflect-metadata'
import { get } from 'lodash'
import request from 'supertest'
import server from '../../server'
import { ICustomResponse } from '../../shared/interfaces/custom.response.interface'
import { UsersService } from "../users.service"
describe('FEATURE: /users', () => {
  describe('SCENARIO: /users', () => {
    describe('WHEN: received request in /', () => {
      it('THEN: must be return array of users', async () => {
        const mockedUsers = [{ id: 1, name: 'martinz', email: 'martinz@example.com' }]
        jest.spyOn(UsersService.prototype, 'get').mockResolvedValueOnce(mockedUsers)
        const response = await request(server).get('/users')
        const sut: ICustomResponse = JSON.parse(get(response, 'text'))

        expect(sut.httpCode).toBe(200)
        expect(sut.routePath).toBe('/users')
        expect(sut.data.users).toMatchObject(mockedUsers)
      })
    })
  })
  
})