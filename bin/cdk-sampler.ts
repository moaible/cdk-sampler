#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkSamplerStack } from '../lib/cdk-sampler-stack';

const app = new cdk.App();
new CdkSamplerStack(app, 'CdkSamplerStack');
