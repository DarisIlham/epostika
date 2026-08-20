import mongoose from "mongoose";

const imageVariantsSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
      trim: true,
    },
    medium: {
      type: String,
      trim: true,
    },
    large: {
      type: String,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const imageSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
      trim: true,
    },
    alt: {
      type: String,
      required: true,
      trim: true,
    },
    order: {
      type: Number,
      required: true,
      min: 1,
    },
    width: {
      type: Number,
      min: 1,
    },
    height: {
      type: Number,
      min: 1,
    },
    variants: {
      type: imageVariantsSchema,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const coverImageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    alt: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const pageSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[a-z0-9-]+$/,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    order: {
      type: Number,
      required: true,
      min: 1,
    },
    coverImage: {
      type: coverImageSchema,
      default: undefined,
    },
    images: {
      type: [imageSchema],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

pageSchema.index({
  isActive: 1,
  order: 1,
});

const Page = mongoose.model("Page", pageSchema);

export default Page;