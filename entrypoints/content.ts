export default defineContentScript({
  matches: ['*://learn.snhu.edu/*'],
  main() {
    console.log('Brighterspace extension content script loaded!');
  },
});
