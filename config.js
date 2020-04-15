'use strict';

module.exports = {
  url: 'https://lumen.netlify.com',
  pathPrefix: '/',
  title: 'Blog by Joey Steinberger',
  subtitle: 'An unordered collection of my thoughts',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Joey Steinberger',
    photo: '/photo.jpg',
    bio: 'Software Engineer who likes to make fun things',
    contacts: {
      email: 'joey.steinberger@gmail.com',
      twitter: 'https://twitter.com/Woofwoofwoo',
      github: 'https://github.com/Josamuel',
      linkedin: 'https://www.linkedin.com/in/joey-steinberger/',
      instagram: 'https://www.instagram.com/joeysteinberger/',
    }
  }
};
