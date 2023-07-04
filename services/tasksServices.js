const fs = require('fs/promises');

const path = require('path');
const tasksPath = path.join(__dirname, '..', "db",  "tasks.json");
const getAllTasksService = async () => {
   const data = await fs.readFile(tasksPath);
   return JSON.parse(data);
}

module.exports = {
   getAllTasksService,
}