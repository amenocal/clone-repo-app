/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("push", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    console.log(context)
    console.log("I received a push event")

    return true;
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
