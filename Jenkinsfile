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
    stage('Git Checkout')
    {
        steps
     	{
     	    checkout scm
     	}
    }
    stage('Build Image')
    {
        steps
        {
            script
            {
               dockerImage = docker.build("${registry}:${GIT_COMMIT}")
            }
        }
    }
    stage('Deploy Image')
    {
        steps
        {
            script
            {
                docker.withRegistry( '', registryCredential )
                {
                    dockerImage.push()
                }
            }
        }
    }
    stage('Clone Helm Chart Repo')
    {
        steps
        {
            script
            {
                git (branch: 'jenkins-test',
                	 credentialsId: githubCredential,
                     url: 'https://github.com/iampaavan/helm-charts.git')
                sh ("pwd")
                sh ("ls")
                latestversion = getChartVersion()
                newVersion = generateNewVersion("patch")
                echo latestversion
                echo newVersion
                sh ("yq r ./frontend/Chart.yaml version")
                sh ("yq w -i ./frontend/Chart.yaml 'version' ${newVersion}")
                sh ("yq r ./frontend/Chart.yaml version")
                sh ("yq r ./frontend/values.yaml 'image.name'")
                sh ("yq w -i ./frontend/values.yaml 'image.name' '${registry}:${GIT_COMMIT}'")
                sh ("yq r ./frontend/values.yaml 'image.name'")
                sh ('git config --global user.email "gopalareddy.p@neu.edu"')
                sh ('git config --global user.name "iampaavan"')
                sh ("git add --all")
                sh ('git commit -m "testing jenkins ci/cd"')
                withCredentials([usernamePassword(credentialsId: 'github', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                sh('git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/iampaavan/helm-charts.git jenkins-test')
                }
            }
        }
    }
  }
}
def getChartVersion(){
    def version = sh (returnStdout: true, script: 'yq r ./frontend/Chart.yaml version')
    return version
}

def generateNewVersion(release){
    def (major, minor, patch) = getChartVersion().tokenize(".").collect{element -> return element.toInteger()}
    def newVersion
    if (release == 'major'){
        newVersion = "${major + 1}.0.0"
    }
    else if (release == 'minor'){
        newVersion = "${major}.${minor + 1}.0"
    }
    else if (release == 'patch'){
        newVersion = "${major}.${minor}.${patch + 1}"
    }
    return newVersion
}