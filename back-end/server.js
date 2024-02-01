import app from './app.js';
import mongoose from 'mongoose';
import { envsConfig } from './configs/envsConfig.js';

mongoose
  .connect(envsConfig.dbHost)
  .then(() => {
    app.listen(envsConfig.port, () => {
      console.log(`Server running. Use our API on port: ${envsConfig.port}`);
    });
  })
  .catch(e => {
    console.log(console.log(e));
    process.exit(1);
  });
