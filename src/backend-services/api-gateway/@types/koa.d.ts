import { Middleware, ParameterizedContext } from 'koa';
import { RouterContext, Middleware as RouterMiddleware } from '@koa/router';
import { Logger } from 'winston';
import OAuth2Server from 'oauth2-server';
import { Version } from '@packages/communication';

import { Config } from '../src/configs/types';

import { ValidateResult } from '../src/lib/joi';

import { AuthProviderTypes } from '../src/providers';

declare module 'koa' {
  interface User {
    id: string;
    email: string;
    roles: AuthProviderTypes.UserRole[];
    isEmailVerified: boolean;
    registeredAt: Date;
  }

