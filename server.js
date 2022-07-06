const S3rver = require('s3rver');
const process = require('process');

let instance;
// Begin reading from stdin so the process does not exit.
process.stdin.resume();

process.on('SIGINT', () => {
    console.log('Received SIGINT. Press Control-D to exit.');
});

// Using a single function to handle multiple signals
function handle(signal) {
    console.log(`Received ${signal}`);
    instance.close();
    process.exit(0);
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);
process.on('SIGHUP', handle);


const port = process.env.PORT || 4569;
const address = process.env.HOST || 'localhost';
const resetOnClose = !!process.env.RESET_ON_CLOSE || false;
let configureBuckets = [];
if (process.env.BUCKETS) {
    configureBuckets =  process.env.BUCKETS.split(',').map(v => ({ name: v }));
}

const options = {
    port,
    address,
    silent: false,
    directory: '/tmp/s3rver',
    ...(process.env.VHOST_BUCKETS !== undefined ? { vhostBuckets: !!process.env.VHOST_BUCKETS } : {}),
    configureBuckets,
    resetOnClose
};
console.log('S3rver config: ',options)
instance = new S3rver(options).run((err, { address, port } = {}) => {
    if (err) {
        console.error(err);
    } else {
        console.log('S3rver listening at address %s:%d', address, port);
    }
});


