# tsx-storage
localStorage、sessionStorage的TypeScript封装，提供通用的API方法，同时支持泛型方法。

## Installing
Using npm:
```bash
$ npm install tsx-storage
```

## Example
### LocalStorage 测试
```ts
import { LocalStorage } from 'tsx-storage';

// LocalStorage测试
const key1 = 'local_number';
const value1 = 666888;
LocalStorage.setItem<number>(key1, value1); // 返回：true/false;
LocalStorage.getItem<number>(key1); // 返回：666888/null;
LocalStorage.removeItem(key1); // 返回：true/false;

const key2 = 'local_string';
const value2 = 'hello world';
LocalStorage.setItem<string>(key2, value2); // 返回：true/false;
LocalStorage.getItem<string>(key2); // 返回：'hello world'/null;
LocalStorage.removeItem(key2); // 返回：true/false;

const key3 = 'local_boolean';
const value3 = true;
LocalStorage.setItem<boolean>(key3, value3); // 返回：true/false;
LocalStorage.getItem<boolean>(key3); // 返回：true/null;
LocalStorage.removeItem(key3); // 返回：true/false;
```

### SessionStorage 测试
```ts
import { SessionStorage } from 'tsx-storage';

// SessionStorage测试
const key1 = 'session_number';
const value1 = 666888;
SessionStorage.setItem<number>(key1, value1); // 返回：true/false;
SessionStorage.getItem<number>(key1); // 返回：666888/null;
SessionStorage.removeItem(key1); // 返回：true/false

const key2 = 'session_string';
const value2 = 'bala bala xiaomoxian';
SessionStorage.setItem<string>(key2, value2); // 返回：true/false;
SessionStorage.getItem<string>(key2); // 返回：'bala bala xiaomoxian'/null;
SessionStorage.removeItem(key2); // 返回：true/false;
```

## API
##### LocalStorage.setItem<T>(key: string, value: T): boolean
##### LocalStorage.getItem<T>(key: string): T | null
##### LocalStorage.removeItem(key: string): boolean
##### LocalStorage.clear(): void
##### SessionStorage.setItem<T>(key: string, value: T): boolean
##### SessionStorage.getItem<T>(key: string): T | null
##### SessionStorage.removeItem(key: string): boolean
##### SessionStorage.clear(): void
