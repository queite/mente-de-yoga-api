import { model as mongooseCreateModel, Schema } from 'mongoose';
import IUser from '../interfaces/authInterfaces';
import MongoModel from './mongoModel';

const motorcycleMongoSchema = new Schema<IUser>({
  id: Number,
  name: String,
  userPermission: 'admin' | 'student',
  email: String,
  password: String,
}, { versionKey: false });

class MotorcycleModel extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('MotorcycleModel', motorcycleMongoSchema)) {
    super(model);
  }
}

export default MotorcycleModel;