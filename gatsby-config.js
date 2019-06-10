
module.exports = {
  siteMetadata: {
    title: 'Yuri Shewchuk - Software Engineer',
    siteUrl: 'https://yshewchuk.github.io',
    description: 'Résumé - Yuri Shewchuk',
  },
  plugins: ['gatsby-plugin-sass',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/ // See below to configure properly
        }
      }
    }]
}