import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';

const backend = defineBackend({
  auth,
});

delete backend.resources.auth.resources.cfnResources.cfnUserPool.usernameAttributes;
