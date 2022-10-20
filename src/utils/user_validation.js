const create = {
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};