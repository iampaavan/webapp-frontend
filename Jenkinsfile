pipeline
{
  environment
  {
    registry = credentials("frontend_registry")
    registryCredential = 'dockerhub'
    githubCredential = 'github'
    dockerImage = ''
    HOME = '.'
    GIT_COMMIT = """${sh(
                    returnStdout: true,
                    script: 'git rev-parse HEAD'
                ).trim()}"""
  }
  agent any
  stages
  {
//     stage('Git Checkout')
//     {
//         steps
//      	{
//      	    checkout scm
//      	}
//     }
//     stage('Build Image')
//     {
//         steps
//         {
//             script
//             {
//                dockerImage = docker.build("${registry}:${GIT_COMMIT}")
//             }
//         }
//     }
//     stage('Deploy Image')
//     {
//         steps
//         {
//             script
//             {
//                 docker.withRegistry( '', registryCredential )
//                 {
//                     dockerImage.push()
//                 }
//             }
//         }
//     }
    stage('clone helm chart repo')
    {
        steps
        {
            script
            {
                git (branch: 'jenkins-test',
                	 credentialsId: githubCredential,
                     url: 'https://github.com/hemalgadhiya/helm-charts.git')
                sh ("pwd")
                sh ("ls")
            }
        }
    }
  }
}
// def getChartVersion(){
//     def version = sh (returnStdout: true, script: 'yq r ./backend/Chart.yaml version')
//     return version
// }
