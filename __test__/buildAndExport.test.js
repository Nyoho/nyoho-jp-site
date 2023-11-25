const { exec } = require('child_process');

describe('Next.js Build and Export', () => {
  it('should build successfully', done => {
    exec('next build', (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stderr).toBeFalsy();
      done();
    });
  }, 10000);

  it('should export successfully', done => {
    exec('next export', (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stderr).toBeFalsy();
      done();
    });
  }, 10000);
});
