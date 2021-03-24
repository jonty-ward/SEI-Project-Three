import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 40 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  profilePic: { type: String, required: true },
  wishList: [{ type: String, required: true }]
})

export default mongoose.model('User', userSchema)