import  { GameSavingLoader } from '../user.js';

test("test load", () => {
  const result = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  GameSavingLoader.load().then((response) => {
    expect(response).toBe(result);
    done();
  });
})

