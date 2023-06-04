import React from 'react';
import { Html, Root, Head, Body, Comment } from '@modern-js/runtime/document';

export default function Document(): React.ReactElement {
  return (
    <Html>
      <Head>
        <link href="https://modernjs.dev" />
        <Comment>{'<!-- Need a Comment -->'}</Comment>
      </Head>
      <Body>
        <Root rootId="platform-root" />
        <Root rootId="root" />
      </Body>
    </Html>
  );
}
