import { getData } from './api';
import path from 'path';

describe('getData', () => {
  it('should return data for a valid file path', async () => {
    // モック化したファイルシステムやAPIから期待される応答をセットアップ
    // ...

    const filePath = path.join(__dirname, '../__test__/fixtures/sample.org');
    const data = await getData(filePath);
    expect(data).toBeDefined();
    // 応答の内容に対するさらなる検証を行う
    // ...
  });

  it('should throw an error for an invalid file path', async () => {
    const path = '../__test__/fixtures/not-found-sample.org';
    await expect(getData(path)).rejects.toThrow();
  });
});
