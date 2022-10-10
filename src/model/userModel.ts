import { model as mongooseCreateModel, Schema } from 'mongoose';
import IUser from '../interfaces/authInterfaces';
import MongoModel from './mongoModel';

const userSchema = new Schema<IUser>({
  id: Number,
  name: String,
  role: {
    type: String,
    enum: ['admin', 'student'],
  },
  email: String,
  password: String,
}, { versionKey: false });

class MotorcycleModel extends MongoModel<IUser> {
  constructor(model = mongooseCreateModel('User', userSchema)) {
    super(model);
  }
}

export default MotorcycleModel;