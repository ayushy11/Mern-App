const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");

router.use(cookieParser());

require("../db/connection"); 
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello there from router`);
});

// Registration route using promises
// router.post("/register", (req, res) => {
//   // console.log(req.body);

//   const { name, email, phone, work, password, cpassword } = req.body;

//   console.log(name);
//   console.log(email);

//   // res.json({message: req.body})
//   // res.send("This is router page")

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "Fill all the fields" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already exists" });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User registered successfully" });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: "Failed to register" });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// Registration route using Async-Await

router.post("/register", async (req, res) => {
  const { username, email, phone, work, password, cpassword } = req.body;

  if (!username || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Fill all the fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Passwords are not matching" });
    } else {
      const user = new User({
        username,
        email,
        phone,
        work,
        password,
        cpassword,
      });
      // middleware from userSchema
      await user.save();

      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Login route

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({message: "awesome"});

  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials pass" });
      } else {
        res.json({ message: "Login success" });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

// about us page

router.get("/about", authenticate, (req, res) => {
  console.log("Hi About from the server.");
  res.send(req.rootUser);
});

module.exports = router;
