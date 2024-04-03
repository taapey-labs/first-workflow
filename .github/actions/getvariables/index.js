const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

try {

const api_url = core.getInput('api_url');
const api_token = core.getInput('api_token');

console.log('api_url:', api_url);
// console.log('api_token:', api_token);

const response = await axios.get(api_url, {
  headers: {
    'Authorization': `Bearer ${api_token}`,
    'Content-Type': 'application/json'
  }
});

console.log('response:', response);
core.setOutput(response.data);

core.startGroup('Logging Api response');
console.log(JSON.stringify(github.context, null, 2));
core.endGroup();

}
catch (error) {
  core.setFailed(error.message);
}
