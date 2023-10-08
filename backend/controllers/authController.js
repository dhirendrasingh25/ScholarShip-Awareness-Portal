const jwt = require("jsonwebtoken");
const Student = require("../models/studentModel");

// const signToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES_IN,
//   });
// };

// const createSendToken = (student, statusCode, res) => {
//   const token = signToken(student._id);
//   const cookieOptions = {
//     expires: new Date(
//       Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//   };
//   if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

//   res.cookie("jwt", token, cookieOptions);

//   // Remove sensitive information from the output
//   const { password, __v, ...userWithoutSensitiveInfo } = student.toObject();
//   res.status(statusCode).json({
//     status: "success",
//     token,
//     data: {
//       user: userWithoutSensitiveInfo,
//     },
//   });
// };

exports.signup = async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    return res.status(201).json({
      status: "success",
      message: "user created",
      login: true,
      id: newStudent._id,
    });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};

exports.login = async (req, res, next) => {
  // console.log(req.body);
  const { email, password } = req.body;
  console.log(email, password);

  if (!email || !password) {
    // console.log("fuck");
    return res.status(400).json({
      status: "failed",
      message: "Please provide email and password!",
      login: false,
    });
  }

  try {
    const student = await Student.findOne({ email }).select("+password");
    // console.log(student, student.password);
    if (
      !student ||
      !(await student.correctPassword(password, student.password))
    ) {
      return res.status(401).json({
        status: "failed",
        message: "Incorrect email or password",
        login: false,
      });
    }

    return res.status(200).json({
      status: "success",
      login: true,
      id: student._id,
    });
  } catch (error) {
    res.status(500).json({ status: "failed", message: error.message });
  }
};
