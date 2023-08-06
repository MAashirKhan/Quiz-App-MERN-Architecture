const mongoose = require("mongoose");

const user = mongoose.model(
  "Users",
  mongoose.Schema(
    {
      userfullName: {
        type: String,
        required: true,
      },
      userEmail: {
        type: String,
        required: true,
        unique: true,
      },
      userPassword: {
        type: String,
        required: true,
      },
      userIsAdmin: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    {
      timestamps: true,
      //Converting to JSON
      toJSON: {
        transform: function (doc, ret) {
          ret.userId = ret._id.toString();
          delete ret._id;
          delete ret.__v;
          delete ret.userPassword;
        },
      },
    }
  )
);

module.exports = {
  user,
};
