import moment from 'moment';

function delete_method_logger(req) {
  console.info(`${moment().format('hh:mm:ss.sss')} [DEL] ${req.originalUrl}`);
}

function post_method_logger(req) {
  console.info(`${moment().format('hh:mm:ss.sss')} [POST] ${req.originalUrl}: ${JSON.stringify(req.body)}`);
}

function get_method_logger(req) {
  console.info(`${moment().format('hh:mm:ss.sss')} [GET] ${req.originalUrl}`);
}

function put_method_logger(req) {
  console.info(`${moment().format('hh:mm:ss.sss')} [PUT] ${req.originalUrl}: ${JSON.stringify(req.body)}`);
}

export default function logger(req, res, next) {
  switch (req.method) {
    case 'GET':
      get_method_logger(req);
      break;
    case 'POST':
      post_method_logger(req);
      break;
    case 'DELETE':
      delete_method_logger(req);
      break;
    case 'PUT':
      put_method_logger(req);
      break;
    default:
      console.error(`${moment().format('hh:mm:ss.sss')} [ERR] Not implement the logger for method: "${req.originalUrl}"`);
      break;
  }
  next();
}