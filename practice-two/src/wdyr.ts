import whyDidYouRender from '@welldone-software/why-did-you-render';
import React from 'react';

if (import.meta.env.DEV == true) {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    hotReloadBufferMs: 10,
  });
}
