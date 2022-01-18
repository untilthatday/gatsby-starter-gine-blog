module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/gine-blog-v2-58556b252e864111b3ce872b124d0940#6c22830de46c49128858d73fdbb62678"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/gine-blog-v2-58556b252e864111b3ce872b124d0940#a477421f372b478496851eedd1042883"
            }
        }
    ],
}
