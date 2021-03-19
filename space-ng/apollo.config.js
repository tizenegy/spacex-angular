// tells apollo where to find backend api and where it points (public spacex api)
module.exports = {
    client: {
        service: {
            name: 'angular-spacex-graphql-codegen',
            url: 'https://api.spacex.land/graphql/'
        }
    }
}