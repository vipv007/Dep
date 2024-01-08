const DateModel = require('./dateModel');

// Controller function to handle retrieving stored dates
exports.getStoredDate = async (req, res) => {
  try {
    // Fetch the latest stored date from the Date collection in MongoDB
    const storedDate = await DateModel.findOne().sort({ _id: -1 }).limit(1);
    
    if (!storedDate) {
      return res.status(404).json({ error: 'No stored date found' });
    }

    res.json(storedDate);
  } catch (error) {
    console.error('Error retrieving date:', error);
    res.status(500).json({ error: 'Error retrieving date' });
  }
};

// Controller function to handle saving selected date to the database
exports.saveSelectedDate = async (req, res) => {
  try {
    const { selectedDate } = req.body;

    if (!selectedDate) {
      return res.status(400).json({ error: 'Selected date is missing in request body' });
    }

    const date = new DateModel({ selectedDate });
    await date.save();

    res.status(201).json({ message: 'Date saved successfully' });
  } catch (error) {
    console.error('Error saving date:', error); // Log the specific error
    res.status(500).json({ error: 'Error saving date' });
  }
};

exports.getSelectedLocations = (req, res) => {
  DateModel.findOne().sort({ _id: -1 }).exec((err, storedData) => {
    if (err) {
      res.status(500).send(err);
    } else if (!storedData || !storedData.selectedLocation) {
      res.json([]); // Return an empty array if no selected location found
    } else {
      res.json(storedData.selectedLocation);
    }
  });
};

exports.saveSelectedLocations = async (req, res) => {
  try {
    const { selectedLocation } = req.body;

    if (!selectedLocation) {
      return res.status(400).json({ error: 'Selected location is missing in request body' });
    }

    const newDate = new DateModel({ selectedLocation });
    await newDate.save();

    res.status(201).json({ message: 'Location saved successfully', savedLocation: newDate });
  } catch (error) {
    console.error('Error saving location:', error); // Log the specific error
    res.status(500).json({ error: 'Error saving location' });
  }
};
