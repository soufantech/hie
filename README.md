<div align="center">
  <img src="https://avatars2.githubusercontent.com/u/61063724?s=200&v=4" width="100px">
</div>

<br />

<div align="center">
  <h1>@soufantech/hie</h1>
  <p>hie allows you to build role hierarchies of any complexity and easily check user permissions across them.</p>
</div>

<br />

<div align="center">

[![typescript-image]][typescript-url] [![jest-image]][jest-url] [![npm-image]][npm-url]

</div>

## Installing

with yarn

`yarn add @soufantech/hie`

or npm

`npm install @soufantech/hie`

## Todo:

- docs: add usage examples;
- chore: add and configure semantic-release;
- refactor: refactor authorities to their own folder;
  - move `RoleAuthority` interface from role-matcher.ts;
- test: remove use of `getMapping` function in `HierarchicalRoleAuthority` tests;
- refactor: remove `getMapping` function;
- feat: define role hierarchy as string (more or less like Spring Boot does);

---

<div align="center">
  <sub>Built with ❤︎ by <a href="http://soufan.com.br">SouFan</a>
</div>

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"

[npm-image]: https://img.shields.io/npm/v/@soufantech/hie.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@soufantech/hie "npm"

[jest-image]: https://img.shields.io/badge/tested_with-jest-99424f.svg?style=for-the-badge&logo=jest
[jest-url]: https://github.com/facebook/jest "jest"
