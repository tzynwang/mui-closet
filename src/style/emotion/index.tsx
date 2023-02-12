import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const emotionCache = createCache({
  key: 'mui-closet',
  prepend: true,
});

export default emotionCache;

export { CacheProvider as EmotionCacheProvider };
