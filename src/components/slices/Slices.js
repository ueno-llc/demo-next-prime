import React from 'react';
import { Text } from './Text';
import { Image } from './Image';

const renderSlice = (item, index) => {
  switch (item.__typename) {
    case 'ArticleBodyText':
      return (
        <Text
          key={index}
          text={item.text}
        />
      );
    case 'ArticleBodyImage':
      return (
        <Image
          key={index}
          src={item.image}
          alt={item.caption}
          caption={item.caption}
        />
      );
    default:
      return null;
  }
};

export const Slices = ({ items }) => (
  <div>
    {[].concat(items || []).map(renderSlice)}
  </div>
);
