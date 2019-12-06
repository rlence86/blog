---
title: 'Creating a blog with Gatsby'
date: '2019-12-06'
tags: ['Gatsby']
---

I wanted to dedicate the first post in my blog to explain how I created it. I heard about 
Gatsby the first time last mont, reading a post about technologies that we, developers, should learn in the next year(s). This post was talking about static sites generators and it was pointing than [GatsbyJS](https://www.gatsbyjs.org/) was the most recomendable.

The good thing about static sites is that you can host them without need of any database or server side in your app. Once you are done, it will generate a full site of HTML + JS pages which you can share for free in [Github Pages](https://pages.github.com/) or, as I did, in [Netlify](https://www.netlify.com/).

Static sites are faster, and even safer because, as it happened in the old times, you are just serving static files.

GatsbyJS is based in React and GraphQL, which are new technologies for me so I took the chance to go throw the complete [tutorial](https://www.gatsbyjs.org/tutorial/) to get an overview of it. It allows us to do things like:

- Create blog posts in markdown files (GraphQL is in charge of ingest data from files and serve them to the blog with queries)
- Connect to Wordpress (again, GraphQL is the one managing all data and connecting with Wordpress database)
- Create private areas thanks to its connector with Auth0

I didn't start from scratch. I used one of the many blog [starters](https://www.gatsbyjs.org/starters/?v=2) offered by GatsbyJS and started my project based on it. I chosed this [one](https://www.gatsbyjs.org/starters/email2vimalraj/gatsby-starter-tech-blog/) and, as you will see, just changed texts and images. I will add more improvements in the future if I need them.

After some quick commands you can write code and modify any starter to fit your needs.

You can also follow this [tutorial](https://www.gatsbyjs.org/docs/deploying-to-netlify/) to configure your "pipeline" with Netlify and deploy your changes in production in every commit you do to your blog repository (using Github, Bitbucket or GitLab).