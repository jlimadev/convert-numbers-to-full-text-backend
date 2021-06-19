# Spell Out Numbers
This is a Typescript Project to write down/spell numbers given an input.

A few examples of usage

```typescript
const numbersFactory = new WrittenNumberFactory(writtenNumbersData);
const writeNumbers = new SpellOutNumber(numbersFactory);

const numbers = Array.from(Array(999).keys());
const writtenNumbers = numbers.map((number) =>
  writeNumbers.invokeWith(number),
);
```

## Install the dependencies
```bash
yarn
```

## Start the app
```bash
yarn start
```

## Testing

```bash
yarn test
```