# Spell Out Numbers
This is a Typescript Project to write down/spell it when you input.

A few examples of usage

```typescript
import { spellOutNumber } from "./app";

let spelledNumber: String;
spelledNumber = spellOutNumber(100) // one hundred
spelledNumber = spellOutNumber(12) // twelve
spelledNumber = spellOutNumber(412) // four handred (and) twelve
spelledNumber = spellOutNumber(445) // four handred (and) forty-five
```

## Install the dependencies
```bash
yarn
```

## Testing

```bash
yarn test
```