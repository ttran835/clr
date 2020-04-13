const Memories = require('express').Router();
const {
  Controller: { MemoriesController },
} = require('../../Controller');

Memories.route('/get-memories').get(MemoriesController.getMemories);

module.exports = { Memories };
