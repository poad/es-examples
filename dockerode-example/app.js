const Docker = require('dockerode');

const docker = new Docker(); // defaults to above if env variables are not used

docker.listContainers(options = { all: true }, callback = function (err, containers) {
  document.getElementById('container').innerText = containers.map((container) => `${container.Id}:${container.Status}`).reduce((previous, current, index, array) => `${previous}¥n${current}`);
});
