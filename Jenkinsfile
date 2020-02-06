pipeline {
    environment {
        registry = "hemalgadhiya/csye-7374-advanced-cloud-webapp-frontend"
        registryCredential = 'dockerhub'
    }
    agent any

    stages {
        stage('building image'){
            steps{
                script {
                    docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
    }

}
