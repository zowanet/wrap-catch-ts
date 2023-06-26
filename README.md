# wrap-catch

### Install

```bash
npm install @zowanet/wrap-catch
```

```bash
yarn add @zowanet/wrap-catch
```

```bash
pnpm add @zowanet/wrap-catch
```

### Import

```typescript
import wrapCatch from '@zowanet/wrap-catch'; // wrapCatchSync is the default import
import { wrapCatchAsync, wrapCatchSync } from '@zowanet/wrap-catch';
```

```javascript
const { default: wrapCatch } = await import('@zowanet/wrap-catch'); // wrapCatchSync is the default import
const { wrapCatchAsync, wrapCatchSync } = await import('@zowanet/wrap-catch');
```

### Usage

TypeScript:

```typescript
const getSmallNumber: (input: number) => number | Error = wrapCatch((input: number): number => {
    if (input > 0.5) {
        throw new Error('Too big');
    } else {
        return input;
    }
});

const result1: number | Error = getSmallNumber(0.1);
console.log(result1); // 0.1

const result2: number | Error = getSmallNumber(0.9);
console.log(result2); // Error
```

JavaScript:

```javascript
const getSmallNumber = wrapCatch(input => {
    if (input > 0.5) {
        throw new Error('Too big');
    } else {
        return input;
    }
});

const result1 = getSmallNumber(0.1);
console.log(result1); // 0.1

const result2 = getSmallNumber(0.9);
console.log(result2); // Error
```
