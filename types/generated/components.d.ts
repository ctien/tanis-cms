import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCoreValuesBlock extends Schema.Component {
  collectionName: 'components_blocks_core_values_blocks';
  info: {
    displayName: 'Core Values Block';
    icon: 'cube';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface BlocksCoreValues extends Schema.Component {
  collectionName: 'components_blocks_core_values';
  info: {
    displayName: 'Core Values';
    icon: 'cube';
    description: '';
  };
  attributes: {
    CoreValue: Attribute.Component<'blocks.core-values-block', true>;
    Title: Attribute.String;
  };
}

export interface BlocksHeaderMenu extends Schema.Component {
  collectionName: 'components_blocks_header_menus';
  info: {
    displayName: 'Header Menu';
  };
  attributes: {
    MenuItem: Attribute.Component<'blocks.link', true>;
  };
}

export interface BlocksHeroSlide extends Schema.Component {
  collectionName: 'components_blocks_hero_slides';
  info: {
    displayName: 'Hero Slide';
    icon: 'cube';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    image: Attribute.Media<'images'> & Attribute.Required;
    Description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'cube';
    description: '';
  };
  attributes: {
    HeroSlide: Attribute.Component<'blocks.hero-slide', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
  };
}

export interface BlocksLink extends Schema.Component {
  collectionName: 'components_blocks_links';
  info: {
    displayName: 'Link';
    icon: 'cube';
  };
  attributes: {
    Title: Attribute.String;
    Href: Attribute.String;
    Icon: Attribute.Media<'images'>;
  };
}

export interface BlocksStory extends Schema.Component {
  collectionName: 'components_blocks_stories';
  info: {
    displayName: 'Story';
    icon: 'cube';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images', true>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.core-values-block': BlocksCoreValuesBlock;
      'blocks.core-values': BlocksCoreValues;
      'blocks.header-menu': BlocksHeaderMenu;
      'blocks.hero-slide': BlocksHeroSlide;
      'blocks.hero': BlocksHero;
      'blocks.link': BlocksLink;
      'blocks.story': BlocksStory;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
