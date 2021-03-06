import { shield, and, or, not, allow } from 'graphql-shield'
import { isAuthenticated, isAdmin, isUser } from './rules';
export default shield({
    Query: {
      me: isAuthenticated,
      users: isAdmin,
      hosts: isAdmin,
    },
    Mutation: {
      upsertHost: isAdmin,
      upsertUser: isAdmin,
    },
    Host: isAuthenticated,
  },
  {
    fallback: 'Not authorized',
  },
  )