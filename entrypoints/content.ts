export default defineContentScript({
  matches: ['*://learn.snhu.edu/home/d2l','*://learn.snhu.edu/home/d2l/*'],
  main() {
    console.log('Hello content.');
  },
});
