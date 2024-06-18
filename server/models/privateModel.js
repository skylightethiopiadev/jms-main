import mongoose from "mongoose";
import * as valid from "../utils/validator.js";

const privateSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      validate: valid.name("First name"),
    },

    middleName: {
      type: String,
      validate: valid.name("Middle name"),
    },

    lastName: {
      type: String,
      validate: valid.name("Last name"),
    },

    bio: {
      type: String,
      validate: valid.textMax("Bio", 100),
    },

    gender: {
      type: String,
      validate: valid.gender("Gender"),
    },

    birth: {
      type: String,
      validate: valid.gender("Date of birth"),
    },

    phone: {
      type: String,
      validate: valid.phone("Phone"),
    },

    nationality: {
      type: String,
      validate: valid.paragraph("Nationality", 4, 100),
    },

    employmentInfo: {
      type: {
        employed: { type: Boolean, default: false },
        currentEmployer: {
          type: String,
          validate: valid.paragraph("Current Employer", 4, 100),
        },
        jobTitle: {
          type: String,
          validate: valid.paragraph("Job Title", 4, 100),
        },
        employmentStatus: {
          type: String,
          validate: valid.paragraph("Employment Status", 4, 100),
        },
      },
    },

    address: {
      type: {
        country: { type: String, validate: valid.paragraph("Country") },
        region: {
          type: String,
          validate: valid.required("Region", 4, 100),
        },
        city: {
          type: String,
          validate: valid.paragraph("City", 4, 100),
        },
        subCity: {
          type: String,
          validate: valid.paragraph("Sub City", 4, 100),
        },
        // woreda: {
        //   type: String,
        //   validate: valid.paragraph("Woreda", 4, 100),
        // },
        houseNumber: {
          type: String,
          validate: valid.paragraph("House Number", 4, 100),
        },
      },
    },

    maritalStatus: {
      type: String,
      enum: ["Married", "Separated", "Divorced", "Not Married"],
      default: "Not Married",
      validate: valid.required("Marital Status"),
    },

    // dependents information: {
    //   type: String,
    //   validate: valid.paragraph("dependents information", 4, 100),
    // },
    contactInformation: {
      type: {
        phone: { type: String, validate: valid.phone("Phone") },
        postalCode: {
          type: String,
        },
      },
    },

    preferredCommunicationMethod: {
      type: String,
      validate: valid.required("Preferred Communication Method"),
    },

    criminalHistory: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
      validate: valid.required("Criminal History"),
    },

    priorLegalRepresentation: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
      previousAttorneyInfo: {
        name: String,
        email: String,
        phone: String,
      },
      validate: valid.required("Previous Attorney"),
    },

    preferredCommunicationTime: {
      type: String,
      validate: valid.required("Preferred Communication Time"),
    },

    emergencyContactInfo: {
      fullName: String,
      relationshipType: String,
      phone: String,
      email: String,
      postalCode: String,
    },

    isPro: {
      type: Boolean,
      default: false,
    },

    profilePicture: {
      type: String,
      default: "http://localhost:3000/Default_Profile_Picture.svg",
    },

    profileFillStatus: {
      type: Number,
      default: 20,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

privateSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

privateSchema.pre("save", function (next) {
  let percent = 20;
  const fields = [
    "firstName",
    "middleName",
    "lastName",
    "gender",
    "phone",
    "address",
    "nationality",
    "profilePicture",
  ];
  fields.map((field) => {
    if (this[field]?.length > 0) {
      percent += 10;
    }
  });

  console.log(this, percent, "percent");
  this.profileFillStatus = percent;
  next();
});

export const Private = mongoose.model("private", privateSchema);
