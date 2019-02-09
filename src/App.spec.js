import { doMutationCount } from './App';
describe('Local State', () => {
  it('should increment the countere', () => {
    function test (x){
      return x;
    }
    const value = 1;

    expect(doMutationCount(test, value)).to.equal(value);
  });

  it('should decrement the countere', () => {});
});
