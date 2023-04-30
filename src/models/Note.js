import { Schema, Types, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const NoteSchema = new Schema(
  {
    createdBy: {
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
    },
    active: {
      type: Boolean,
      default: true,
      required: true
    }
  },
  { timestamps: true }
);

NoteSchema.plugin(paginate);

export default model('note', NoteSchema);
