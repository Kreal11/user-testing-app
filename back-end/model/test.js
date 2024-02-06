import { Schema, model } from 'mongoose';
import { handleMongooseError } from '../helpers/handleMongooseError.js';

const testSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Set title for test'],
    },
    category: {
      type: String,
      required: [true, 'Set category for test'],
    },
    isEnabled: {
      type: Boolean,
      required: true,
      default: false,
    },
    userOwner: {
      type: String,
      required: [true, 'Set userOwnerId for test'],
    },
    result: {
      type: String,
      required: [true, 'Set result for test'],
    },
  },
  { versionKey: false, timestamps: true }
);

testSchema.post('save', handleMongooseError);

export const Test = model('test', testSchema);
