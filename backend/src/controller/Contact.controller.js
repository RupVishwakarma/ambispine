import { Feedback } from './../modal/feedback.modal.js';
import { RequestService } from './../modal/request.modal.js'

export const SaveFeedback = async (req, res) => {
  try {
    const { firstname, lastname, email, feedback, acceptProcess } = req.body;

    const newFeedback = new Feedback({
      firstname,
      lastname,
      email,
      feedback,
      acceptProcess,
    });

    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
};

export const SaveRequestService = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      orgaization,
      region,
      industry,
      feedback,
      acceptProcess,
      product_details,
    } = req.body;

    const newRequestService = new RequestService({
      firstname,
      lastname,
      email,
      orgaization,
      region,
      industry,
      feedback,
      acceptProcess,
      product_details,
    });
    await newRequestService.save();

    res.status(201).json({ message: 'Request for service submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit request for service' });
  }
};