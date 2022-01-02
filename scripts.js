

function computerPlay(rpc) {
    return rpc[Math.floor(Math.random()*rpc.length)];

}

var rpc = ['gorilla', 'man', 'gun'];

console.log(computerPlay(rpc));