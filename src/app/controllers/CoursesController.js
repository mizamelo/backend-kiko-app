class CoursesController {
  async list(req, res) {
    return res.status(200).json({ message: "ok" });
  }
}

module.exports = new CoursesController();
