const workout = require("../models/Workout");
const router = require("express").Router();
//find all workouts 
router.get("/api/workouts", (req, res) => {
    workout.find().then(data => {
            res.json(data)
        })
        .catch(err => { res.json(err)
        })
});
//post route for all workouts 
router.post("/api/workouts", (req, res) => {
    workout.create({}).then(data => res.json(data))
        .catch(err => { res.json(err)
        })
});

router.get("/api/workouts/range", (req, res) => {
    workout.find()
        .then(data => { res.json(data)
        })
        .catch(err => { res.json(err)
        })
});

router.post("/api/workouts/range", (req, res) => {
    workout.create({})
        .then(data => res.json(data))
        .catch(err => { res.json(err)
        })
});
//update workout by id
router.put("/api/workouts/:id", ({ body, params }, res) => {
    workout.findByIdAndUpdate( params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(data => res.json(data))
        .catch(err => { res.json(err)
        })
});

module.exports = router;