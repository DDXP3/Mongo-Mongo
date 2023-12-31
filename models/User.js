const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: isEmail, message:'Not A Email'
            }
        },
        thoughts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
        friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model ('user', userSchema);

module.exports = User;
