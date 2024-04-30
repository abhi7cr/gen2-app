import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';

const backend = defineBackend({
  auth,
});


backend.resources.auth.resources.cfnResources.cfnUserPool.overrideLogicalId('UserPool');

delete backend.resources.auth.resources.cfnResources.cfnUserPool.usernameAttributes;
// delete backend.resources.auth.resources.cfnResources.cfnIdentityPoolRoleAttachment.roleMappings;
