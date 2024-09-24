import mongoose from "mongoose";

const requestServiceSchema = new mongoose.Schema({
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
  orgaization: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  industry: {
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
  product_details: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export const RequestService = mongoose.model('RequestService', requestServiceSchema);


