import type { Serverless } from 'serverless/aws';

export const baseServerlessConfiguration: Partial<Serverless> = {
  frameworkVersion: '3',
  package: {
    individually: true,
    excludeDevDependencies: true,
  },
  plugins: ['serverless-esbuild', 'serverless-offline'],
  custom: {
    stage: '${opt:stage, "dev"}',
    esbuild: {
      bundle: true,
      minify: true,
      target: 'node18',
      packager: 'yarn',
      sourcemap: true,
      sourcesContent: false,
    },
  },
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    memorySize: 128,
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      APP_ENV: '${self:custom.stage}',
    },
    region: 'us-east-1',
    deploymentBucket: {
      name: 'vana-deploy-${self:custom.stage}',
      serverSideEncryption: 'AES256',
    },
    // vpc: {
    //   securityGroupIds: ['sg-04dafbeffca35cbe5'],
    //   subnetIds: ['subnet-0ec036e69cdd2c3d4', 'subnet-08ba1b35f2d31d5e9'],
    // },
  },
};
