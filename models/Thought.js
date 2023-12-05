const { Schema, model } = require('mongoose');
const reactSchema = require('./React');

const thoughtSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
            minlength: 1,
            maxlength:280
        },
        at: {
            type: Date,
            default: Date.now()
        },
        username: {
            type: String,
            required: true
        },
        reacts: [reactSchema]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true,
        },
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reacts.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
