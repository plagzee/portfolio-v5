import mongoose, { Schema, models, model } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: [
        "technical",
        "video-editing",
        "digital-crew",
      ],
      required: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    challenge: {
      title: String,
      content: String,
    },

    solution: {
      title: String,
      content: String,
    },

    result: {
      title: String,
      content: String,
    },

    media: {
      type: [String],
      validate: {
        validator: (arr: string[]) => arr.length <= 4,
        message: "Maximum 4 images allowed",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default models.Project ||
  model("Project", ProjectSchema);