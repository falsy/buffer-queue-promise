import Buffer from './Buffer';

const request1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('request1 start');	
      resolve('ok');
    }, 1000);
  });
};
const request2 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('request2 start');
      resolve('ok2');
    }, 3000);
  });
};
const request3 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('request3 start');
      resolve('ok3');
    }, 1000);
  });
};
const request4 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('request4 start');
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


const req1 = Buffer(request1);
const req2 = Buffer(request2);
const req3 = Buffer(request3);
const req4 = Buffer(request4);


const bPromise1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('promise start1');
      resolve('promise ok1');
    }, 2000)
  });
} 

const bPromise2 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('promise start2');
      resolve('promise ok2');
    }, 1000)
  });
}

const pro1 = bPromise1();
const pro2 = bPromise2();


(async () => {
  const abc = await Buffer(request4).then(res => res);
  console.log('async-'+abc);
})();