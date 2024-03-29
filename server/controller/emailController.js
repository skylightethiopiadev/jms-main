import asyncCatch from "express-async-catch";
import sendEmail from "../utils/nodeMailer.js";
import AppError from "../utils/AppError.js";
import nodemailer from "nodemailer";

// export const sendEmailController = asyncCatch(async (req, res, next) => {
//   //   try {
//   const data = await sendEmail({
//     from: "JMS <gymate@gmail.com>",
//     email: "gedeonagmas2580@gmail.com",
//     subject: `new email received from JMS sender: ${req.body.fullName} email: ${req.body.email}`,
//     message: req.body.description,
//   });

//   if (!data) {
//     return next(new AppError("Something went wrong, Email not sent", 400));
//   }

//   return res.status(200).json({
//     status: "SENT",
//     message: "Email Sent Successfully. We Really Appreciate for your Support",
//   });
//   //   } catch (err) {
//   //     return next(new AppError("connection problem please try again", 500));
//   //   }
// });

export const sendEmailMessage = async (passwordResetUrl, user, res, next) => {
  try {
    const data = await sendEmail({
      email: user.email,
      subject: "Reset your password",
      message: "Verify your email to reset your password",
      next,
      res,
      html: `<div>This is your verification link click <a style={{background:'yellow',padding:'5px', border-radius:'20px',color:white,padding:10px;}} href="${passwordResetUrl}">here</a> to reset your password</div>`,
    });
    console.log(data, "dddddddddddddddd");
    return res.status(200).json({
      status: "success",
      message:
        "We have just sent a verification link via your email address please check. it's valid only for 30 minutes",
      passwordResetUrl,
    });
  } catch (err) {
    console.log(err, "error from controller");
    user.resetTokenExpires = undefined;
    user.resetToken = undefined;
    user.save({ validateBeforeSave: false });
    return next(
      new AppError(
        "Something went wrong Unable to send the email please try again",
        500
      )
    );
  }
};

export const sendEmailHandler = (email, res, next, subject, message, html) => {
  const transporter = nodemailer.createTransport({
    host: "mail.makutalawyers.com",
    port: 465,
    secure: true,
    auth: {
      user: "donotreply@makutalawyers.com",
      pass: "Maku@Mesy#2098",
    },
  });

  const mailOptions = {
    from: "Makuta Law Firm <donotreply@makutalawyers.com>",
    to: email,
    text: message,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error in sending email  " + error);
      return next(
        new AppError(
          "Connection problem unable to send the email please try again!",
          500
        )
      );
    } else {
      return res.status(200).json({ message: message });
    }
  });
};
