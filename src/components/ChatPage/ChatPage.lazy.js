import React, { lazy, Suspense } from 'react';

const LazyChatPage = lazy(() => import('./ChatPage'));

const ChatPage = props => (
  <Suspense fallback={null}>
    <LazyChatPage {...props} />
  </Suspense>
);

export default ChatPage;
