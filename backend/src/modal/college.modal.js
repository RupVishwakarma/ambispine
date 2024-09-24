import mongoose, { Schema } from 'mongoose';

const collgeSchema = new Schema({
          name: {
                    type: String,
                    required: true,
                    default:"apsu"
          },
          Address: {
                    type: String,
                    required: true,
          },
          mobile: {
                    type: Number,
                    required: true,
                    min: [10, 'mobile number have atleast 10 digit']
          },
          email: {
                    type: String,
                    unique: true,
                    lowercase: true,

          }
          
}, {
          timestamps: true
})

const CollegeSchema = mongoose.model("CollegeSchema", collgeSchema);

export default CollegeSchema;

