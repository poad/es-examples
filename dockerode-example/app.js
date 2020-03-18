var Docker = require('dockerode');

var docker = new Docker(); //defaults to above if env variables are not used

docker.listContainers(options= {'all': true}, callback= function (err, containers) {
    document.getElementById('container').innerText = containers.map(container => {
        return container.Id + ':' + container.Status;
    }).reduce(function (previous, current, index, array) {
        return previous + '¥n' + current;
    });
});
