exports.handler = function(event, context, callback) {
  // your server-side functionality
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      event: `Hello world broj 1 ${JSON.stringify(event)}`,
      context: `Hello world broj 2 ${JSON.stringify(context)}`
    })
  });
};
