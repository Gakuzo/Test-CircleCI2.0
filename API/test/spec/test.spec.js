var chai = require('chai');
var assert = chai.assert;

// テスト本体
describe('テスト', function() {
  it('テストケースその1', function() 
    {
      result = 'test';
      assert.strictEqual(result, 'test');
    });
});
