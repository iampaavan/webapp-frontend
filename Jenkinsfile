pipeline {
    docker.withRegistry('csye-7374-advanced-cloud-webapp-frontend', 'dockerhub') {

        git url: "https://github.com/CSYE-7374-Advanced-Cloud-Computing/webapp-frontend.git", credentialsId: 'github'

        sh "git rev-parse HEAD > .git/commit-id"
        def commit_id = readFile('.git/commit-id').trim()
        println commit_id

        stage "build"
        def app = docker.build "recipe-frontend"

        stage "publish"
        app.push 'master'
        app.push "${commit_id}"
    }
}
