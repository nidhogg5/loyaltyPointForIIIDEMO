// features/step_definitions/browser_steps.js 1s
//var seleniumWebdriver = require('selenium-webdriver');
var Code = require(process.cwd() + '/script/model/Code');
var {defineSupportCode} = require('cucumber');


const deploey = require(process.cwd() + '/Contract/dynamicDeploey/deploey');
Code.the_exchange_rate_is_alp_blp(1,2);

/*exchangRequest.deployContract();
deploey.init(function(){
  console.log("Deploey！");
});*/
//Code.the_exchange_rate_is_alp_blp(1,2);
//Code.original_alp_account_of_A_is(1);
