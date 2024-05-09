import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplifyTeamDrive',
  access: (allow) => ({
    '*': [
        allow.guest.to(['read'])
    ]
  })
});