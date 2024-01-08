const EnglishDetails = require('./englishModel'); // Replace with the correct file path
const Stages = require('./stagesModel'); // Replace with the correct file path

// Controller function to get English data
exports.getEnglishData = async (req, res) => {
  try {
    // Retrieve English data from the English_Details collection
    const englishData = await EnglishDetails.find();
    res.status(200).json(englishData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get Tamil data
exports.getTamilData = async (req, res) => {
  try {
    // Retrieve Tamil data from the Stages collection
    const tamilData = await Stages.find();
    res.status(200).json(tamilData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
