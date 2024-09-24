import mongoose from 'mongoose';
const careerSchema = new mongoose.Schema({
          name: {
            type: String,
            required: true,
          },
          mobile: {
            type: String,
            required: true,
            validate: {
              validator: function(v) {
                return /^\d{10}$/.test(v);
              },
              message: props => `${props.value} is not a valid 10-digit number!`
            }
          },
          email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/\S+@\S+\.\S+/, 'is invalid']
          },
          resume: {
            type: String,
            required: true
          }
        }, { timestamps: true });
        
        
const Career = mongoose.model('Career', careerSchema)