const { GitHubLink } = require('./GitHubLink')
const { fetchTypeDefs } = require('graphql-remote')
const { introspectSchema } = require('graphql-tools')

async function run() {

  const makeGitHubLink = () => new GitHubLink('77d2843e53eccca913b86753485923fd69eb2029')
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
