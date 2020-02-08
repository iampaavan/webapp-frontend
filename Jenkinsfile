pipeline {
  environment {
    registry = credentials("frontend_registry")
    registryCredential = 'dockerhub'
    dockerImage = ''
    GIT_COMMIT = """${sh(
                    returnStdout: true,
                    script: 'git rev-parse HEAD'
                ).trim()}"""
  }
  agent any
  stages {
    stage('Git Checkout')
     			{
     		   steps
     		   		{
     						checkout scm
     					}
     		}
    stage('Build Image'){
        steps{
            script{
               dockerImage = docker.build("${registry}:${GIT_COMMIT}")
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