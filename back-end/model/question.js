import { Schema, model } from 'mongoose';
import { handleMongooseError } from '../helpers/handleMongooseError.js';

const questionSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Set title for question'],
    },
    validAnswer: {
      type: String,
      require: true,
    },
    isEnabled: {
      type: Boolean,
      required: true,
      default: false,
    },
    answers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'answer',
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
