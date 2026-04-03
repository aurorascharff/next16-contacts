import 'server-only';

import { cache } from 'react';
import { prisma } from '@/db';

export const getCurrentUser = cache(async () => {
  const users = await prisma.user.findMany();
  return users.length > 0
    ? users[0]
    : {
        id: '1',
        name: 'Anonymous',
      };
});
