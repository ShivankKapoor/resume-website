// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom has no canvas/DOMMatrix implementation; pdfjs-dist references DOMMatrix
// at module load time, which App.tsx pulls in transitively via the Resume route.
if (typeof globalThis.DOMMatrix === 'undefined') {
  // @ts-expect-error minimal shim, only needs to exist so module-scope checks don't throw
  globalThis.DOMMatrix = class DOMMatrix {};
}
