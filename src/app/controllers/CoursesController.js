const { Course } = require('../models')

class CoursesController {
  async list(req, res) {
    try {
      const data = await Course.findAll()

      return res.status(200).json({ data })
    } catch (err) {
      res.status(401).json({ msg: err });
    }
  }

  async listOne(req, res) {
    try {
      const { id } = req.params;
      
      const data = await Course.findOne({ where: { id } })

      return res.status(200).json({ data })
    } catch (err) {
      res.status(401).json({ msg: err });
    }
  }
}

module.exports = new CoursesController()
