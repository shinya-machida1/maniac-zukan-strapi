import type { Schema, Attribute } from '@strapi/strapi';

export interface ImageImage extends Schema.Component {
  collectionName: 'components_image_images';
  info: {
    displayName: 'image';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media<'images'>;
  };
}

export interface BodyText extends Schema.Component {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'body';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'image.image': ImageImage;
      'body.text': BodyText;
    }
  }
}
