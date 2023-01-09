import OverallStat from '../models/OverallStat.js';

export const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();
    res.status(200).json(overallStats[0]); // Only 1 year so grab the first array item
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};