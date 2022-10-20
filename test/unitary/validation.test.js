const Constants = require('../../src/utils/constants');
const Validation = require('../../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        placa:"123abc",
        modelo:"uno",
        marca:"fiat",
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro placa', () => {
    const result = Validation.create({
        modelo:"uno",
        marca:"fiat",
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});