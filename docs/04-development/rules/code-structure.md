# Instructions

## Use these as the primary coding conventions for this template.

### 1. Variable and function naming

- Must follow **`camelCase`** style.

```typescript
let user;
let userProfile;
let userSettings;
function emailService() { ... }
```

### 2. Class, interface, type, and enum naming

- Must follow **`PascalCase`** style.

```typescript
class User { ... }
interface UserProfile { ... }
type UserSettings = { ... }
enum EmailService { ... }
```

### 3. Constants, env vars, and config keys

- Must follow **`UPPER_SNAKE_CASE`** style.

Constant variables

```typescript
const COLOR = "#fff"
const SUCCESS_COLOR = "#0f0"
```

Environment variables

```-
API_KEY=your-api-key
```

### 4. Function parameters

#### a. Always specify a return type

- Explicitly define the return type for every function to improve readability and maintainability.
- Even if a function doesn’t return anything, use `void`.

```typescript
function createUser(name: string): void {
  // implementation
}
createUser("John")
```

#### b. Prefer a single parameter

- Functions should ideally accept only `one` parameter.
- This improves readability and maintainability.

```typescript
function createUser(name: string) {
  /* ... */
}
createUser("John")
```

#### c. If you need more than one, use an object

- Instead of passing multiple arguments, group them into a single object.

`Bad Example:`

```typescript
function createUser(name: string, age: number, role: string) {
  // implementation
}
createUser("John", 25, "admin")
```

`Good Example:`

```typescript
function createUser(user: { name: string; age: number; role: string }): void {
  // implementation
}
createUser({ name: "John", age: 25, role: "admin" })
```

#### d. Use destructuring for object params

```typescript
interface IUser {
  name?: string
  age?: number
  role?: string
}

function createUser({ name, age, role }: IUser) {
  console.log(name, age, role)
}
```
