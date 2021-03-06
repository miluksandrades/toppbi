const knex = require("../connection");

module.exports = {
    async index(req, res) {
        const {
            username,
            password
        } = req.body;

        const login = await knex('usuario')
            .where('username', username)
            .andWhere('password', password)
            .select('nome')
        
        if(!login){
            return res.status(400).json({msg: 'Usuario não existe'});
        }

        return res.status(200).json(login);
    },

    async login(req, res){
        const {username, password} = req.body;

        if(username === 'admin' && password === 'admin'){
            return res.status(200).send('OK');
        } else{
            return res.status(400).send('ERROR');
        }
    }
}