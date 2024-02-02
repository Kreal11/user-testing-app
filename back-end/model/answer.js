import { Schema, model } from 'mongoose';
import { handleMongooseError } from '../helpers/handleMongooseError.js';

const answerSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'question',
    },
  },
  { versionKey: false, timestamps: true }
);

answerSchema.post('save', handleMongooseError);

export const Question = model('answer', answerSchema);
