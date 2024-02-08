import mongoose from 'mongoose';

export interface TaskDocument extends mongoose.Document {
  title: string;
  description?: string;
  dueDate: String;
  priority: string;
  assignedTo?: string[];
  category: string;
  subtasks?: string[];
  status: string;
}

const TaskSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  dueDate: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Contacts',
  },
  category: {
    type: String,
    required: true,
  },
  subtasks: {
    type: [String],
  },
  status: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model<TaskDocument>('Task', TaskSchema);

export default Task;
