import 'reflect-metadata'
import { IUsersRepository } from "../users.interfaces"
import { UsersService } from "../users.service"

describe('FEATURE: UsersService', () => {
  let service: UsersService
  let usersRepositoryMock: IUsersRepository

  beforeEach(() => {
    usersRepositoryMock = {
      get: jest.fn().mockResolvedValue(['user1', 'user2'])
    }

    service = new UsersService(usersRepositoryMock)
  })

  describe('SCENARIO: repository is mocked', () => {
    describe('WHEN: method get is called', () => {
      it('THEN: must be return array of users', async () => {
        const sut = await service.get()

        expect(sut).toEqual(['user1', 'user2'])
        expect(usersRepositoryMock.get).toHaveBeenCalled()
      })
    })
  })
  
})