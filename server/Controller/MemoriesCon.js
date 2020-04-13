const { Memories } = require('../../database/tables/Memories');

const MemoriesController = {
  getMemories: (req, res) => {
    res.send('hello Memories controller');
  },
};

module.exports = { MemoriesController };
