// async & await
// clear style of using promise (Symantic Sugar)

// 1. async
// function fetchUser(){
//     return new Promise((resolve, reject) => {
//         // do network request in 10 secs...
//         resolve('teddy');
//     });
// }

async function fetchUser() {
    // do network request in 10 secs...
    return 'teddy';
}

const user = fetchUser();
user.then(console.log);

// 2. await (async 내에서만 활용 가능)
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// function getBanana(){
//     return delay(3000)
//     .then(() => '🍌');
// }

// function pickFruit(){
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     });
// }

// pickFruit().then(console.log);

async function pickFruit() { // 동시다발적 실행 가능 (병렬적)
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruit().then(console.log);

// 3. Useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);