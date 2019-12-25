pipeline {
  agent {
    docker {
      image 'node:8.17-alpine3.11'
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