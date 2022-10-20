const { UserModel } = require('../../src/infrastructure/database');
const user = require('../../src/port/user_repository');

describe('create', () => {
    it('Valid User', async () => {
        UserModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                placa:"123abc",
                modelo:"uno",
                marca:"fiat",
            }),
        }));

        expect(await user.create({
            id: 1,
            placa:"123abc",
            modelo:"uno",
            marca:"fiat",
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                placa: expect.any(String),
                modelo: expect.any(String),
                marca: expect.any(String),
            }),
        );
    });
});

describe('editUser', () => {
    it('Valid edit', async () => {
        UserModel.findOneAndUpdate = jest.fn().mockImplementation(() => ({
            exec: () => ({
                toObject: () => ({
                    id: 1,
                    placa:"456abc",
                    modelo:"toro",
                    marca:"fiat",
                }),
            }),
        }));

        expect(await user.update({
            placa:"456abc",
            modelo:"toro",
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                placa: expect.any(String),
                modelo: expect.any(String),
                marca: expect.any(String),
            }),
        );
    });
});

describe('listUsers', () => {
    it('Valid list', async () => {
        UserModel.find = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                placa:"ab123c",
                modelo:"ka",
                marca:"ford",
            }),
        }));

        expect(await user.list()).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                placa:"ab123c",
                modelo:"ka",
                marca:"ford",
            }),
        );

    });
});

describe('getByPlaca', () => {
    it('Valid list', async () => {
        UserModel.findOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                placa:"ab123c",
                modelo:"ka",
                marca:"ford",
            }),
        }));

        expect(await user.getByPlaca({
            placa:"ab123c"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                placa:"ab123c",
                modelo:"ka",
                marca:"ford",
            }),
        );

    });
});

describe('deleteUser', () => {
    it('Valid delete', async () => {
        UserModel.deleteOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                deletedCount: 1,
            }),
        }));

        expect(await user.delete({
            placa:"ab123c",
        })).toEqual(1);
    });
});