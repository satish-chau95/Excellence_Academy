import { Events } from "../models/eventsSchema.js";

export const createEvents = async (req, res, next) => {
  console.log(req.body);
  const { event } = req.body; // Ensure correct key

  try {
    if (!event) {
      return res.status(400).json({ success: false, error: "Please Fill Form!" });
    }

    const createdEvent = await Events.create({ event });
    res.status(201).json({
      success: true,
      message: "Event Created Successfully!",
      event: createdEvent, // Return created event
    });
  } catch (err) {
    next(err);
  }
};

export const getAllEvents = async (req, res, next) => {
  try {
    const events = await Events.find().sort({ createdAt: -1 }); // Latest event first
    res.status(200).json({
      success: true,
      events,
    });
  } catch (err) {
    next(err);
  }
};
