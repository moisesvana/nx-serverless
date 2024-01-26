import type { Serverless } from 'serverless/aws';
import { baseServerlessConfiguration } from '../../serverless.base';
const serviceName = 'mystack';
const serverlessConfiguration = <Serverless>{
  ...baseServerlessConfiguration,
  service: serviceName,
  provider: {
    ...baseServerlessConfiguration.provider,
  },
  functions: {
    hello: {
      handler: 'src/handler.hello',
      events: [
        {
          http: {
            method: 'get',
            path: 'hello',
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
