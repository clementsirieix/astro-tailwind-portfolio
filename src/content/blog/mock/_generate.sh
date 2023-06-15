#!/bin/bash

today=$(date +%s)
one_year_ago=$(date -d"1 year ago" +%s)
escaped_entry="---"

for i in {1..24}
do
  random_date_seconds=$(( RANDOM * (today - one_year_ago) / 32767 + one_year_ago ))
  random_date=$(date -d"@$random_date_seconds" +%Y-%m-%d)

  printf -v content $'%s
createdAt: %s
---

# Title %s

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et **dolore** magna aliqua. Ut _enim_ ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, [sunt](https://wwww.github.com) in culpa qui officia deserunt mollit anim id est laborum.

> Blockquote

```js
const value = 1;

function foo() {
  return value;
}
```

![alt_text](./img/developer-computer.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et **dolore** magna aliqua. Ut _enim_ ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, [sunt](https://wwww.github.com) in culpa qui officia deserunt mollit anim id est laborum.' "$escaped_entry" "$random_date" "$i"

  echo "$content" > "post-$i.mdx"
done