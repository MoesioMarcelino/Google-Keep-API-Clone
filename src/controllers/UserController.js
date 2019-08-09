const User = require('../models/UserModel')

module.exports = {
  async index (req, res) {
    const users = await User.find()

    res.send(users)
  },

  async store (req, res) {
    // eslint-disable-next-line camelcase
    const { username, profile_photo } = req.body

    const userExists = await User.findOne({ username })

    if (userExists) {
      return res.json(userExists)
    }

    const user = await User.create({ username, profile_photo })

    return res.json(user)
  }
}
