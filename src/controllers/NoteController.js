const Note = require('../models/NoteModel')
const User = require('../models/UserModel')

module.exports = {
  async store (req, res) {
    const { username } = req.params

    const user = await User.findOne({ username })

    if (!user) {
      res.status(404).json({ message: 'user not found' })
    }

    const { textNote } = req.body

    const note = await Note.create({ note: textNote, author: user })

    user.notes.push(note)

    await user.save()

    return res.json(user.notes)
  },

  async index (req, res) {
    const { username } = req.params

    const user = await User.findOne({ username }).populate('notes')

    if (!user) {
      res.status(404).json({ message: 'user not found' })
    }

    return res.json(user.notes)
  }
}
