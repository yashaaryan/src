const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let tasks = [
    {
      id: 1,
      title: 'Complete Project Proposal',
      description: 'Write and submit the project proposal document for review.',
      dateDue: '2023-06-30',
      completed: false,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Prepare Presentation Slides',
      description: 'Create a compelling slide deck for the upcoming client presentation.',
      dateDue: '2023-06-30',
      completed: true,
      priority: 'high'
    }
  ];
  

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    res.status(404).json({ error: 'Task not found' });
  } else {
    res.json(task);
  }
});

app.get('/priorityTasks', (req, res) => {
    const filteredTasks = tasks.filter(task => !task.completed);
  
    const sortedTasks = filteredTasks.sort((a, b) => {
      const priorityOrder = { low: 0, medium: 1, high: 2 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  
    res.json(sortedTasks);
  });
  


app.post('/tasks', (req, res) => {
    const { title, description,dateDue,completed, priority } = req.body;
  
    if ((title || description || completed || dateDue || priority) === undefined) {
      res.status(400).json({ error: 'Invalid request body' });
    } else {
      const taskId = tasks.length + 1;
      const newTask = { id: taskId, title, description, completed, dateDue, priority };
      tasks.push(newTask);
      res.status(201).json(newTask);
    }
  });
  

app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description, completed,dateDue,priority} = req.body;

  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    res.status(404).json({ error: 'Task not found' });
  } else if ((title || description || completed || dateDue || priority) === undefined) {
    res.status(400).json({ error: 'Invalid request body' });
  } else {
    tasks[taskIndex] = { id: taskId, title, description, completed,dateDue,priority};
    res.json(tasks[taskIndex]);
  }
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    res.status(404).json({ error: 'Task not found' });
  } else {
    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask[0]);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
