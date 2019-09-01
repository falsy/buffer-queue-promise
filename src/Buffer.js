import Queue from './Queue.js';

export default = (request) => {
  return new Promise(resolve => {
    Queue.enqueue(() => {
      return new Promise((innerResolve, innerInject) => {
        request().then(res => innerResolve(res)).catch(err => innerInject(err));
      });
    }, res => resolve(res));
  });
}