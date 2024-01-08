const StageModel = require('./stagesModel'); 

exports.getStages = (req, res) => {
  StageModel.find({}, (err, stages) => {
    if (err) {
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(200).json(stages);
    }
  });
};
