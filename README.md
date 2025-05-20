# JavaScript µBenchmarks

Microbenchmarks that (in)validate CreednGo rules.

This repository is a NPM project configured with the [Mitata benchmarking framework](https://github.com/evanwashere/mitata).

## Caution required

Rules often suggest an alternative way of writing small pieces of code.
Measuring the effect of a small and isolated amount of code is hard, we need to be cautious.
See [Mitata doc - writing good benchmarks](https://github.com/evanwashere/mitata?tab=readme-ov-file#writing-good-benchmarks), and many others.

## Required tools

To run or create benchmarks, you need NodeJS (or another compatible JS runtime).

## Writing a new benchmark

- Create a new **mjs** file in `microbenchs`.
- Create some functions to test. Use mitata's `bench` to configure the benchmark, `boxplot` to get a graphical output, and `run` to execute the benchmark. See [`example.mjs`](microbenchs/example.mjs).

## Running one/multiple benchmark(s)

Use the `bench.sh` script, which is a wrapper around the JMH jar file.
Run `./bench.sh -h` too see the available JMH options.

To run a single benchmark file:

```sh
npm run benc -- path/to/file.mjs
```

Example:

```sh
npm run benc -- microbenchmarks/example.mjs
```

The benchmark results are printed to stdout.
Please read [mitata's README](https://github.com/evanwashere/mitata) for more information about the benchmark tool.
