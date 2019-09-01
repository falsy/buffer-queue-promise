import Buffer from './Buffer';

const request1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('ok');
    }, 1000);
  });
};
const request2 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('ok2');
    }, 3000);
  });
};
const request3 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('ok3');
    }, 1000);
  });
};
const request4 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('ok4');
    }, 3000);
  });
};

Buffer(request1).then((res) => {
  console.log(res);
});
Buffer(request2).then((res) => {
  console.log(res);
});
Buffer(request3).then((res) => {
  console.log(res);
});
Buffer(request4).then((res) => {
  console.log(res);
});


(async () => {
  const abc = await Buffer(request4).then(res => res);
  console.log(abc);
})();