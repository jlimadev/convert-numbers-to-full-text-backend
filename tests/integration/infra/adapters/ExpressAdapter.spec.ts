import ExpressAdapter from '../../../../src/infra/adapters/ExpressAdapter';

describe('ExpressAdapter', () => {
  const expressAdapter = new ExpressAdapter();
  afterEach(() => {
    expressAdapter.close();
  });
  it('should call listen', () => {
    const listenSpy = jest.spyOn(expressAdapter.app, 'listen');
    expressAdapter.listen(10000);
    expect(listenSpy).toHaveBeenCalledWith(10000, expect.any(Function));
  });
  it('it calls the correct method according to what is passed to on', () => {
    const getSpy = jest.spyOn(expressAdapter.app, 'get');
    const callback = jest.fn().mockReturnValue({ statusCode: 200, body: 'test' });
    expressAdapter.on('get', '/test', callback);
    expect(getSpy).toHaveBeenCalledWith('/test', expect.any(Function));
  });
});
