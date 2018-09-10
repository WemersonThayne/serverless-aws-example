'use strict';

module.exports.hello = async (event, context,callback) => {
  const resp = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World Lambda Serveless Framework',
    }),
  };
  
  callback(null,resp);

};
