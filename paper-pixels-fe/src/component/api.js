const api = {
    ENDPOINT: process.env.NODE_ENV === 'production' || process.env.USER == 'ubuntu' ?
    'https://grp06api.webpark.tech' : 'http://localhost:3002'
};

export {api};