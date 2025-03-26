import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  event: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export const Events = mongoose.model("Events", eventSchema);
