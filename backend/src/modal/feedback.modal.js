import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  acceptProcess: {
    type: Boolean,
    required: true,
  },
}, { timestamps: true });

export const Feedback = mongoose.model('Feedback', feedbackSchema);


