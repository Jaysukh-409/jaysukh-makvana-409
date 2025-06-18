---
title: "Reflection on GSoC 2024 Journey"
subtitle: "Brief about the project & How I approach it?"
date: "01-08-2024"
---

# Project Overview

Referring the implementation of Complex64 and Complex128 arrays, I proposed adding support for Boolean array in stdlib-js which will be backed by Uint8Array. BooleanArray should have prototypes that any typed array have like get, set, sort, reverse, at etc. After implementing the BooleanArray constructors and prototypes we need to refactor the packages of `@stdlib/array/*` to add the support of boolean datatype across the entire array namespace. In the same way, We need to refactor the packages of `@stdlib/strided/*` to add the support of boolean datatype across the entire strided namespace. In parallel, We need to add some assertion package which we need to deal with different BooleanArray operation. Similar to strided and array namespace we need to refactor the packages of `@stdlib/ndarray/*` to add the support of boolean datatype across ndarray namespace. In the end, We need to add new packages like mskfilter, mskreject and mskput to ndarray namespace to get ndarray API parity with typed arrays.

# Project Recap

- At the starting of Coding Period, I had `@stdlib/array/bool` containing constructors and some prototypes like set, length etc. So, I started my work with adding the various prototypes for the BooleanArray. I added the map, sort, find, findLast, findIndex, findLastIndex, reverse, toReversed, toSorted, every, some, indexOf, lastIndexOf, includes, slice, subarray, reduce, reduceRight, join, toString, keys, values, with, at, fill, filter, toLocaleString, copyWithin, entries and forEach prototypes for BooleanArray. I added benchmarks, tests and docs files for the same.

- I added the some assertion utilities which I needed to refactor the array and strided namespace which includes `@stdlib/assert/is-booleanarray`, `@stdlib/assert/is-same-booleanarray` and it's base implementation. I added the one of the important package which reinterprets the BooleanArray as Uint8Array as `@stdlib/strided/base/reinterpret-boolean`.

- After those work, I refactored the packages of array namespace to add the support of boolean datatype to array namespace.
- Similarly, I refactored the packages of strided namespace to add the support of boolean datatype to strided namespace.
- Similarly, I refactored the packages of ndarray namespace to add the support of boolean datatype to ndarray namespace.
- Finally, I added the `@stdlib/ndarray/base/mskfilter` and `@stdlib/ndarray/base/mskreject` which used for the masking of ndarray.

# Completed Work

- [#2292](https://github.com/stdlib-js/stdlib/pull/2292), [#2363](https://github.com/stdlib-js/stdlib/pull/2363), [#2376](https://github.com/stdlib-js/stdlib/pull/2376), [#2384](https://github.com/stdlib-js/stdlib/pull/2384), [#2385](https://github.com/stdlib-js/stdlib/pull/2385), [#2390](https://github.com/stdlib-js/stdlib/pull/2390), [#2413](https://github.com/stdlib-js/stdlib/pull/2413), [#2421](https://github.com/stdlib-js/stdlib/pull/2421), [#2432](https://github.com/stdlib-js/stdlib/pull/2432), [#2441](https://github.com/stdlib-js/stdlib/pull/2441), [#2472](https://github.com/stdlib-js/stdlib/pull/2472), [#2509](https://github.com/stdlib-js/stdlib/pull/2509), [#2557](https://github.com/stdlib-js/stdlib/pull/2557), [#2590](https://github.com/stdlib-js/stdlib/pull/2590), [#2607](https://github.com/stdlib-js/stdlib/pull/2607), [#2611](https://github.com/stdlib-js/stdlib/pull/2611) : These PRs added the implementation, documentation, tests and benchmarks of the all the prototypes that any typed array have to the BooleanArray.

- These PRs added the assertion which is used for the BooleanArray for various purposes.

  [#2299](https://github.com/stdlib-js/stdlib/pull/2299): `@stdlib/assert/is-booleanarray`

  [#2401](https://github.com/stdlib-js/stdlib/pull/2401): `@stdlib/assert/is-same-booleanarray`

- [#2306](https://github.com/stdlib-js/stdlib/pull/2306), [#2307](https://github.com/stdlib-js/stdlib/pull/2307), [#2308](https://github.com/stdlib-js/stdlib/pull/2308), [#2309](https://github.com/stdlib-js/stdlib/pull/2309), [#2310](https://github.com/stdlib-js/stdlib/pull/2310), [#2353](https://github.com/stdlib-js/stdlib/pull/2353), [#2354](https://github.com/stdlib-js/stdlib/pull/2354), [#2362](https://github.com/stdlib-js/stdlib/pull/2362), [#2369](https://github.com/stdlib-js/stdlib/pull/2369), [#2391](https://github.com/stdlib-js/stdlib/pull/2391), [#2392](https://github.com/stdlib-js/stdlib/pull/2392), [#2404](https://github.com/stdlib-js/stdlib/pull/2404), [#2419](https://github.com/stdlib-js/stdlib/pull/2419), [#2420](https://github.com/stdlib-js/stdlib/pull/2420), [#2422](https://github.com/stdlib-js/stdlib/pull/2422), [#2423](https://github.com/stdlib-js/stdlib/pull/2423), [#2424](https://github.com/stdlib-js/stdlib/pull/2424), [#2446](https://github.com/stdlib-js/stdlib/pull/2446), [#2447](https://github.com/stdlib-js/stdlib/pull/2447), [#2450](https://github.com/stdlib-js/stdlib/pull/2450), [#2452](https://github.com/stdlib-js/stdlib/pull/2452), [#2453](https://github.com/stdlib-js/stdlib/pull/2453), [#2459](https://github.com/stdlib-js/stdlib/pull/2459), [#2460](https://github.com/stdlib-js/stdlib/pull/2460), [#2461](https://github.com/stdlib-js/stdlib/pull/2461), [#2462](https://github.com/stdlib-js/stdlib/pull/2462), [#2470](https://github.com/stdlib-js/stdlib/pull/2470), [#2471](https://github.com/stdlib-js/stdlib/pull/2471), [#2473](https://github.com/stdlib-js/stdlib/pull/2473), [#2474](https://github.com/stdlib-js/stdlib/pull/2474), [#2486](https://github.com/stdlib-js/stdlib/pull/2486), [#2487](https://github.com/stdlib-js/stdlib/pull/2487), [#2488](https://github.com/stdlib-js/stdlib/pull/2488), [#2494](https://github.com/stdlib-js/stdlib/pull/2494), [#2556](https://github.com/stdlib-js/stdlib/pull/2556) : These PRs refactored the various packages of array namespace and added boolean datatype support to them.

- [#2357](https://github.com/stdlib-js/stdlib/pull/2357) : This PR added the `@stdlib/array/base/assert/is-booleanarray` package which is used to quick test whether a value is a BooleanArray.

- [#2508](https://github.com/stdlib-js/stdlib/pull/2508), [#2513](https://github.com/stdlib-js/stdlib/pull/2513), [#2519](https://github.com/stdlib-js/stdlib/pull/2519), [#2520](https://github.com/stdlib-js/stdlib/pull/2520), [#2521](https://github.com/stdlib-js/stdlib/pull/2521), [#2522](https://github.com/stdlib-js/stdlib/pull/2522), [#2523](https://github.com/stdlib-js/stdlib/pull/2523), [#2524](https://github.com/stdlib-js/stdlib/pull/2524), [#2525](https://github.com/stdlib-js/stdlib/pull/2525), [#2526](https://github.com/stdlib-js/stdlib/pull/2526), : These PRs refactored the packages of strided namespace and added boolean datatype support to them.

- [#2297](https://github.com/stdlib-js/stdlib/pull/2297) : This PR added the `@stdlib/strided/base/reinterpret-boolean` package which is used to reinterpret BooleanArray as Uint8Array.

- [#2505](https://github.com/stdlib-js/stdlib/pull/2505), [#2507](https://github.com/stdlib-js/stdlib/pull/2507), [#2550](https://github.com/stdlib-js/stdlib/pull/2550), [#2551](https://github.com/stdlib-js/stdlib/pull/2551), [#2552](https://github.com/stdlib-js/stdlib/pull/2552), [#2553](https://github.com/stdlib-js/stdlib/pull/2553), [#2554](https://github.com/stdlib-js/stdlib/pull/2554), [#2555](https://github.com/stdlib-js/stdlib/pull/2555), [#2571](https://github.com/stdlib-js/stdlib/pull/2571), [#2572](https://github.com/stdlib-js/stdlib/pull/2572), [#2574](https://github.com/stdlib-js/stdlib/pull/2574), [#2586](https://github.com/stdlib-js/stdlib/pull/2586), [#2587](https://github.com/stdlib-js/stdlib/pull/2587), [#2588](https://github.com/stdlib-js/stdlib/pull/2588), [#2589](https://github.com/stdlib-js/stdlib/pull/2589), [#2598](https://github.com/stdlib-js/stdlib/pull/2598) : These PRs refactored the various packages of ndarray namespace and added boolean datatype support to them.

- These PRs added the some packages for ndarray namespace.

  [#2575](https://github.com/stdlib-js/stdlib/pull/2575): `@stdlib/ndarray/base/assert/is-boolean-data-type`

  [#2604](https://github.com/stdlib-js/stdlib/pull/2604): `@stdlib/ndarray/base/mskfilter`

- [#2281](https://github.com/stdlib-js/stdlib/pull/2281), [#2282](https://github.com/stdlib-js/stdlib/pull/2282), [#2283](https://github.com/stdlib-js/stdlib/pull/2283), [#2431](https://github.com/stdlib-js/stdlib/pull/2431), [#2489](https://github.com/stdlib-js/stdlib/pull/2489) : These PRs includes the various maintainence work like fix the documentation or examples for various packages.

# Current State

As a result of the work completed, the project now includes a `BooleanArray` with all the necessary prototypes that a typed array should have. The boolean datatype support has been integrated across all relevant packages within the array, strided, and ndarray namespaces. Additionally, the required assertion utilities for boolean data types and arrays have been implemented. Moreover, the ndarray now features `mskfilter` and `mskreject` APIs, which provide advanced functionality for fancy ndarray indexing.

# What Remains

For the remaining tasks, I need to implement the mskput API for ndarray and develop higher-level APIs for both mskfilter and mskreject. Additionally, I need to add the C-implementation for all three APIs. These enhancements will significantly contribute to the overall robustness and versatility of the project.

# Challenges and Lessons Learned

I encountered several challenges during my work on this project, and I'd like to highlight a few key ones. One of them was maintaining the strict code standards of the stdlib after gaining a comprehensive understanding of the code flow. With multiple contributors working on related areas, adhering to these standards is essential for ensuring a consistent user experience across all packages. Over time, as I worked on various packages and carefully incorporated feedback on my PRs, I was able to overcome this hurdle.

Another challenge I encountered during this project was implementing new features for ndarray, a task that was unfamiliar to me based on my prior experience. To overcome this, I focused on understanding the ndarray implementation workflow. Replicating the exact process of reference implementations, adjusting tolerance levels, and meticulously checking intermediate values when the results were not as expected proved to be essential learning opportunities.

Throughout the project, I gained valuable insights. One key lesson was the importance of tackling new tasks by thoroughly understanding the implementation process and learning from reference implementations, which is essential for growth. Additionally, learning from continuous feedback and avoiding mistakes in subsequent work proved to be a crucial lesson for me.

# Conclusion

This summer has been an incredible learning experience. Through this program, I have gained valuable insights into various aspects of feature development within a codebase. I've learned how to write and implement tests to ensure code correctness, add benchmarks to assess performance efficiency, and, most importantly, write clean and readable code. I am deeply grateful to [Athan Reines](https://github.com/kgryte) and [Philipp Burckhardt](https://github.com/Planeshifter) for providing me with this opportunity. I would also like to extend my heartfelt thanks to my mentors, [Athan Reines](https://github.com/kgryte) and [Pranav Goswami](https://github.com/Pranavchiku), for reviewing my work, providing valuable feedback and being readliy available for the discussions.