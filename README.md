# nextauth-v5
Every new feature  in next Auth v5 (2024)

# Subjects

- [ ] OAuth(Google, Github, etc)
- [ ] Email magic links (via Resend)
- [ ] Protect pages, server actions, route handlers
- [ ] Server-side vs client-side authentication, caching
- [ ] Roles (e.g. admin, user)
- [ ] Update user data

### unstable_cache

**Allows you yo cache the results of expensive operations, like database queries, and reuse them across multiple requests.**

```ts
import { getUser } from './data'
import { unstable_cache } from 'next/cache'

const getCachedUSer = unstable_cache(
  async (id) => getUser(id),
  ['my-app-user']
);

export default async function Component({ userId }) {
  const user = await getCachedUser(userId);
  // return <div>{user.name}</div>
}

``` 

**Good to know: Accesing dynamic data sources such as headers or cookies inside a cache scope is not supported. If you need this data inside a cached function use headers outside of the cached function and pass the required dynamic data in as an argument.**

# Emails

**Email magic links (via Resend)**

[website](https://resend.com)
