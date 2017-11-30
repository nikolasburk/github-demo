const { ApolloLink } = require('apollo-link')

class GitHubLink extends ApolloLink {
  
  constructor(token) {
    console.log('GitHubLink - init with token', token)
    const headers = token ? {
      Authorization: `Bearer ${token}`
    } : {}
    console.log('GitHubLink - headers', JSON.stringify(headers))    
    super({
      http: {
        uri: `https://api.github.com/graphql`,
        options: {
          headers,
        }
      }
    })
  }
  
}

module.exports = {
  GitHubLink
}