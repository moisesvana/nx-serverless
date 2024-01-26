import { APIGatewayProxyHandler } from 'aws-lambda';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello',
      input: event,
    }),
  };
};
