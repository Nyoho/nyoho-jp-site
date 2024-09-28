const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

jest.setTimeout(20000);

describe('Next.js Build and Export', () => {
  it('should build successfully', async () => {
    const { stdout, stderr } = await execPromise('next build');
    expect(stderr).toBeFalsy();
  });

  it('should export successfully', async () => {
    const { stdout, stderr } = await execPromise('next export');
    expect(stderr).toBeFalsy();
  });
});
