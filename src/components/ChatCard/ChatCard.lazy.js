import React, { lazy, Suspense } from 'react';

const LazyChatCard = lazy(() => import('./ChatCard'));

const ChatCard = props => (
  <Suspense fallback={null}>
    <LazyChatCard {...props} />
  </Suspense>
);

export default ChatCard;
