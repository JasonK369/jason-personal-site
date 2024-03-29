const path = require('path')

module.exports = {
    pathPrefix: '/jason-personal-site',
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
          resolve: 'gatsby-plugin-root-import',
          options: {
            "components": path.join(__dirname, "src/components"),
            "layouts": path.join(__dirname, "src/layouts"),
            "templates": path.join(__dirname, "src/templates"),
            "scss": path.join(__dirname, "src/scss"),
            "types": path.join(__dirname, "src/types"),
            "src": path.join(__dirname, 'src'),
            "pages": path.join(__dirname, 'src/pages')
          }
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Noto Sans`,
            `Righteous`
          ],
          display: 'swap'
        }
      },
      {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /skills_logo/ 
          }
        }
      },
      {
        resolve: "gatsby-plugin-anchor-links",
        options: {
          offset: -100
        }
      }
    ]
}