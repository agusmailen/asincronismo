//promises EM6
const somethingWillHappen = () => {
    return new Promise((resolve , reject) => {
        if(true) {
            resolve('Hey!');
        } else {
            reject('whooops!');
        }
    });
};
somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));
//otro formato de promesa con new Error. cuando salta el error me da una descriocion del mismo.
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('true');
            }, 2000) 
        }else {
            const error = new Error('whoops');
            reject(error);
        }
    });
}     
somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err));
//ejecutar varias promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('array of results', response);
    })
    .catch(err => {
        console.log(err);
    });