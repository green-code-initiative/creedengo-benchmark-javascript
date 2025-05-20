import { run, bench, boxplot, summary } from 'mitata';

// Example taken from mitata's documentation.

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

bench('fibonacci(40)', () => fibonacci(40));

boxplot(() => {
  summary(() => {
    bench('Array.from($size)', function* (state) {
      const size = state.get('size');
      yield () => Array.from({ length: size });
    }).range('size', 1, 1024);
  });
});

await run();
