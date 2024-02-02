import { Schema, model } from 'mongoose';
import { handleMongooseError } from '../helpers/handleMongooseError.js';

const questionSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Set title for question'],
    },
    validAnswerId: {
      type: String,
      require: true,
    },
    isEnabled: {
      type: Boolean,
      required: true,
      default: false,
    },
    text: {
      type: String,
      required: true,
    },
    answers: [
      {
        text: {
          type: String,
          required: [true, 'Set text for answer'],
        },
        answerId: {
          type: String,
          required: [true, 'Set id for answer'],
        },
      },
    ],
    testOwner: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

questionSchema.post('save', handleMongooseError);

export const Question = model('question', questionSchema);
