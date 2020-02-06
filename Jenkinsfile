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
                    sudo docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
    }

}
