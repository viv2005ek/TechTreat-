const Bed = require('../models/bedmodel');

exports.allbeds = async (req, res) => {
    try {
        let db = await Bed.find({});
        if (!db) {
           return res.send("No beds found. Please add beds to the database")
        }
        res.status(200).send(db)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getBedByName = async (req, res) => {
    try {
        let bed = await Bed.findOne({ name: req.params.bedname }); // Use correct param

        if (!bed) {
            return res.status(404).send(`No bed found with the name: ${req.params.bedname}`); // Fix parameter
        }

        let l = bed.status;
        return res.status(200).send(`The status of the bed is: ${l}`);
    } catch (error) {
        return res.status(500).send(`Server error: ${error.message}`);
    }
};



exports.postBed = async (req, res) => {
    try {
        // Create a new bed
        const newBed = await Bed.create({
            name: req.body.name,
            department: req.body.department,
            status: req.body.status || 'free',  // Default to 'free' if not provided
        });

        res.status(201).send({
            message: 'Bed added successfully',
            data: newBed,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.updatebedstatus = async (req, res) => {
    try {
        // Find the bed by name
        let bed = await Bed.findOne({ name: req.params.bedname });

        if (!bed) {
            return res.status(404).send(`No bed found with the name: ${req.params.name}`);
        }
        else {
            bed.status = req.body.status;
            await bed.save();
            return res.status(200).send(`the updated status of the bed is :- ${bed.status}`);
        }
    } catch (error) {
        return res.status(500).send(`Server error: ${error.message}`);
    }
}