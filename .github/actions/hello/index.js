const core = require("@actions/core");
const github = require("@actions/github");

try {
    // throw( new Error("some error message"));

    core.debug("Debug message - when debug mode is enabled in actions settings");
    core.warning("Warning message.");
    core.error("Error message.");

    const name = core.getInput("who-to-greet");
    core.setSecret(name);  // will mask passed value - as secret - will not appear in logs
    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    core.startGroup("Logging GitHub Object");  // create a group in logs that folds and unfolds
    console.log(JSON.stringify(github, null, "\t"));
    core.endGroup();

    core.exportVariable("Hello", "hello");
} catch(error) {
    core.setFailed(error.message);
} 
