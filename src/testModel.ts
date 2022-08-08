import User from './database/models/User';

(async () => {
  const user = await User.findAll({ raw: true });
  console.table(user);
  process.exit(0);
})();