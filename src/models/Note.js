import { Schema, Types, model } from 'mongoose';

const NoteSchema = new Schema(
  {
    userID: {
      type: Types.ObjectId,
      required: true,
      inmutable: true,
      ref: 'user'
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

export default model('note', NoteSchema);
