pipeline {
  agent {
    docker {
      image 'node:8.17-alpine3.11'
      args '-u root'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

  }
}