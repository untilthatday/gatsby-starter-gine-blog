module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/39b75b8c7c8648d3be7a2137c49b604b?v=6a31d8079cfa4d96aefc6f43bd96ac69"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/4d49662a527d45e8b7bd8e9b014144f4?v=a1a4203a8623434781150de17e57b9b4"
            }
        }
    ],
}
