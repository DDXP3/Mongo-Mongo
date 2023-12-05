const { Schema, Types } = require('mongoose');

const reactSchema = new Schema(
    {
        reactId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
          },
          reactBody: {
            type: String,
            required: true,
            maxlength: 280
          },
          username: {
            type: String,
            required: true
          },
          at: {
            type: Date,
            default: Date.now()
          }
    },
    {
      toJSON: {
        getters: true,
      },
    }
);

module.exports = reactSchema;
