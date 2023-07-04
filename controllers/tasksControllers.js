const getAllTasksService = reqire ("../services/tasksServices")
getAllTasks = async (req, res, next) => {
   try {

      const tasks = await getAllTasksService();
      res.status(200).json(tasks);
   } catch (err) {
      next(err);
   }
};

module.exports = {
   getAllTasks
};