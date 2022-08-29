import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  userPermission!: 'admin' | 'student';
  password!: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  userPermission: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'User',
  tableName: 'users',
  timestamps: false,
});

// Course.hasMany(Student, { foreignKey: 'idCourse', as: 'students' });
// Student.belongsTo(Course, { foreignKey: 'idCourse', as: 'course' });
// Course.belongsToMany(Module, { foreignKey: 'idCourse', as: 'modules', through: CourseModule, otherKey: 'idModule' });
// Module.belongsToMany(Course, { foreignKey: 'idModule', as: 'course', through: CourseModule, otherKey: 'idCourse' });

export default User;