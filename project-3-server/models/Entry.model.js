const { Schema, model } = require("mongoose");

const entrySchema = new Schema(
    {
        entryOwner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        entryClient: {
            type: String,
            required: [true, "Entry Client is required."],
        },
        entryHours: {
            type: Number,
            required: [true, "Entry Hours is required."],
        },
        entryEurosHour: {
            type: Number,
            required: [true, "Entry €/h is required."],
        },
        entryDate: {
            type: String,
            required: [true, "Entry date is required."],
        }
    }
);

const Entry = model("Entry", entrySchema);

module.exports = Entry;