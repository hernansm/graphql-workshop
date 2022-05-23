import { authorQueries, authorMutations } from './shop';
import { menuItemQueries, menuItemMutations } from './menuitem';
import { addressQueries, addressMutations } from './address';
import { hoursItemQueries, hoursItemMutations } from './hoursitem';

const resolvers = {
  Query: {
    ...shopQueries,
    ...menuItemQueries,
    ...addressQueries,
  },
  Mutation: {
    ...shopMutations,
    ...menuItemMutations,
    ...addressMutations,
    ...hoursItemMutations,
  },
};

export default resolvers;