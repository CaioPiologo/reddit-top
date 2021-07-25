import redditReducer, { removePost } from './index';

describe('counter reducer', () => {
  const initialState = {
    rawData: {},
    entries: [{ visible: true }, { visible: true }],
    isLoading: false,
  };
  it('should handle initial state', () => {
    expect(redditReducer(undefined, { type: 'unknown' })).toEqual({
      rawData: {},
      entries: [],
      isLoading: false,
    });
  });

  it('should handle remove post', () => {
    const actual = redditReducer(initialState, removePost({ entryPos: 0 }));
    expect(actual.entries).toEqual([{ visible: false }, { visible: true }]);
  });
});
