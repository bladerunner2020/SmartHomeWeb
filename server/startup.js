/**
 * Created by bladerunner on 20.08.2015.
 */
var Service = require('node-windows').Service;
var argv = require('optimist').argv;

console.log("user = " + argv.user);
console.log("pass = " + argv.pass);

// !!!! ATTENTION: It's necessarry to set NODE_ENF=production in Windows Settings

// Create a new service object
var svc = new Service({
    name:'Smart Home',
    description: 'My Smart Home.',
    script:  'c:\\Users\\bladerunner\\Documents\\Node.JS Projects\\SmartHomeWeb\\server\\app.js'
 /*   env: [{
        name: "--user=",
        value: argv.user
    },{
        name: "--pass=",
        value: argv.pass
    }]
    */
});


// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
    svc.start();
});

svc.install();
svc.root ='c:\\Users\\bladerunner\\Documents\\Node.JS Projects\\SmartHomeWeb\\server';
console.log('root: ' + svc.root);