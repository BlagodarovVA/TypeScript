"use strict";
let msg = 'Hello';
msg = "Hello";
const port3000 = 3000;
const port3001 = 3001;
function startServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log(`Server started on ${protocol}://server:${port}`);
    }
    else {
        console.error('Invalid port');
        return 'Error';
    }
    return 'Server started';
}
startServer('http', 3005);
