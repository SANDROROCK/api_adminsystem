const jwt = require('jsonwebtoken');
const variaveis = require('../../config/variables');

module.exports = async (req,res,next) =>{

  let token =  req.headers['x-access-token'];
  if(token){
      try {
            
        let decoded = jwt.verify(token,variaveis.segurança.varToken);
        req.usuarioLogado = decoded;
        next();

      } catch (error) {
        res.status(404).send({
            message:`Token inválido ${error}`,
        })
      }
  }else{
      res.status(404).send({
          message:"Não passado o token",
      })
  }

}