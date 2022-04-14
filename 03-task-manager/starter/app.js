// express
const express = require("express");
const app = express();

// routers
const tasks = require("./routes/tasks");

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

// CRUD (create read update delete)
// app.get('/api/v1/tasks')         --- get all the tasks
// app.post('/api/v1/tasks')        --- create a new task
// app.get('/api/v1/tasks/:id')     --- get single task
// app.patch('/api/v1/tasks/:id')   --- update task
// app.delete('/api/v1/tasks/:id')  --- delete single task

// port and listen
const port = 3000;
app.listen(3000, console.log(`App listening on port ${port}....`));
