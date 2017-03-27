import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import drivers from './routes/drivers';
import ride from './routes/ride';

import config from './config/config'

let app = express();

// Connect to mongo db
if (process.env.TEST_MODE) {
    mongoose.connect(config.db.testMode);
} else {
    let env = process.env.NODE_ENV || 'development';

    mongoose.connect(config.db[env]);
}


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/drivers', drivers);
app.use('/ride', ride);

// catch 404 and forward to error handler
app.use((req, res) => {
    var err = new Error('Not Found');
    err.status = 404;
    res.json({ err: err });
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
    res.json({ err: err });
});

export default app;
