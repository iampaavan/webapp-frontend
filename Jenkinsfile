pipeline {
  environment {
    registry = "hemalgadhiya/csye-7374-advanced-cloud-webapp-frontend"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Git Creds') {
    steps {
            git([url: 'https://github.com/CSYE-7374-Advanced-Cloud-Computing/webapp-frontend.git', branch: 'assignment4', credentialsId: 'github'])
           }
    }
    stage('Build Image'){
        steps{
            script{
               dockerImage = docker.build registry + ":$BUILD_NUMBER"
            }
        }
    }
    stage('Deploy Image'){
        steps
        {
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
            }
         }
        }
    }
  }
}