import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  userPermission!: 'admin' | 'read' | 'write';
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
    type: STRING(50),
    allowNull: false,
  },
  email: {
    type: STRING(250),
    allowNull: false,
  },
  userPermission: {
    type: STRING(10),
    allowNull: false,
  },
  password: {
    type: STRING(50),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'User',
  timestamps: false,
});

// Course.hasMany(Student, { foreignKey: 'idCourse', as: 'students' });
// Student.belongsTo(Course, { foreignKey: 'idCourse', as: 'course' });
// Course.belongsToMany(Module, { foreignKey: 'idCourse', as: 'modules', through: CourseModule, otherKey: 'idModule' });
// Module.belongsToMany(Course, { foreignKey: 'idModule', as: 'course', through: CourseModule, otherKey: 'idCourse' });

export default User;