import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  Context,
} from 'aws-lambda';

export const hello: APIGatewayProxyHandler = async (
  _event: APIGatewayProxyEvent,
  _context: Context,
) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!!!',
    }),
  };
};
