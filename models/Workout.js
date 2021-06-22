const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema(
    {
        day: { type: Date, default: () => new Date() },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Excercise type required"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Name required"
                },
                duration: {
                    type: Number,
                },
                distance: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                weight: {
                    type: Number,
                }
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

WorkoutSchema.virtual("totalDuration").get(function () {
    const duration = this.exercises.reduce((all, exe) => {
        return all + exe.duration;
    }, 0);

    return duration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;