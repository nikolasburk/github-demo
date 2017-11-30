const { GitHubLink } = require('./GitHubLink')
const { fetchTypeDefs } = require('graphql-remote')
const { introspectSchema } = require('graphql-tools')

async function run() {

  const makeGitHubLink = () => new GitHubLink('__TOKEN__')
  try {
    // const githubTypeDefs = await fetchTypeDefs(makeGitHubLink())  
    // console.log(githubTypeDefs)    
    const githubSchema = await introspectSchema(makeGitHubLink())
    console.log(githubSchema)    
  } catch (e) {
    console.log(`Error: `, JSON.stringify(e))
  }

}

run()
