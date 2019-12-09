const { User } = require("../models");

class SessionController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) return res.status(401).json({ msg: "Campo email é obrigatório" });

      if (!password) return res.status(401).json({ msg: "Campo password é obrigatório" });

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ message: "E-mail não encontrado" });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ message: "Senha inválida" });
      }

      return res.json({
        token: await user.generateToken(),
        id: user.id
      });
    } catch (err) {
      res.status(401).json({ msg: err });
    }
  }

  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name) return res.status(401).json({ msg: "Campo name é obrigatório" });
      if (!email) return res.status(401).json({ msg: "Campo email é obrigatório" });
      if (!password) return res.status(401).json({ msg: "Campo password é obrigatório" });

      const user = await User.create({
        name,
        email,
        password
      });

      return res.json({
        token: await user.generateToken()
      });
    } catch (error) {
      res.status(401).json({ msg: error });
    }
  }

  async me(req, res) {
    const { id } = req.body

    try {
      if (!id) return res.status(401).json({ msg: "Campo id é obrigatório" })

      const user = await User.findOne({ where: { id } })

      if (!user) return res.status(401).json({ msg: "Usuário não encontrado" })

      return res.status(200).json({ user }) 
    } catch (err) {
      res.status(401).json({ msg: err });
    }
  }
}

module.exports = new SessionController();