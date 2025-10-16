export default defineContentScript({
  matches: ['*://learn.snhu.edu/*'],

  css: ['../assets/tailwind.css'],

  main() {
    console.log('Brighterspace extension content script loaded!');
  },
});
