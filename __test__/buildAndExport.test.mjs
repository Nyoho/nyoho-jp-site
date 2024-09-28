import { exec } from 'child_process';
import { promisify } from 'util';
import { describe, it, expect } from 'vitest';

const execPromise = promisify(exec);

describe('Next.js Build and Export', () => {
  it('should build successfully', async () => {
    const { stdout, stderr } = await execPromise('next build');
    expect(stderr).toBeFalsy();
  }, { timeout: 20000 });

  it('should export successfully', async () => {
    const { stdout, stderr } = await execPromise('next export');
    expect(stderr).toBeFalsy();
  }, { timeout: 20000 });
});
