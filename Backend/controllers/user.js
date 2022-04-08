const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const sendOTP = require('../controllers/mailsender')
const { resettoken } = require('../controllers/emailTemplates')

exports.dashboard = async (req, res) => {
  const uid = req.user.user_id
  const user = await User.findOne({ uid })
  const name = `${user.firstName} ${user.lastName}`
  const user_data = {
    name: name,
    uid: uid,
    events: user.event.reverse(),
    pimage: user.profilePicture,
    branch: user.branch,
    batch: user.batch,
    email: user.email,
    role: user.role,
    zone: user.zone,
  }
  return res.json({ user_data, token: true, success: true })
}

exports.tokenforreset = async (req, res) => {
  try {
    const email = req.body.email
    const user = await User.findOne({ email: email })
    if (!user) {
      return res.json({
        success: false,
        message: `This Email: ${email} is not Registered With Us Enter a Valid Email `,
      })
    }
    const token = jwt.sign(
      {
        user_id: user.uid,
        email: user.email,
      },
      process.env.SECRET,
      {
        expiresIn: '0.5h',
      }
    )

    // TODO: Need to be changed 
    // http://localhost:3000/setNewPassword/
    const url = `http://localhost:3000/setNewPassword/${token}`

    const emailstat = sendOTP(email, resettoken(url, user.uid))
    console.log(emailstat)
    // await User.updateOne({ email: email }, { token: token });
    res.json({
      success: true,
      message: 'Email Sent Successfully, Please Check Your Email to Continue Further',
    })
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Sending the Reset Message`,
    })
  }
}

exports.setNewPassword = async (req, res) => {
  try {
    const email = req.user.email
    const { password, confirmPassword } = req.body

    if (!password || !confirmPassword) {
      return res.json({
        success: false,
        message: 'Password and Confirm Password is Required',
      })
    }
    if (confirmPassword !== password) {
      return res.json({
        success: false,
        message: 'Password and Confirm Password Does not Match',
      })
    }
    const myEncryPassword = await bcrypt.hash(password, 10)
    const updatedetails = await User.updateOne({ email: email }, { password: myEncryPassword })
    console.log(updatedetails)
    res.json({
      success: true,
      message: `Password Reset Successfull`,
    })
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Updating the Password`,
    })
  }
}
