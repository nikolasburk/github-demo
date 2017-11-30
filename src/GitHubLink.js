const { HybridLink } = require('graphql-remote')

class GitHubLink extends HybridLink {
  
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