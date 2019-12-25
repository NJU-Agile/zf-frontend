pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        git(url: 'https://github.com/NJU-Agile/zf-frontend', branch: 'Master')
        sh 'npm install'
      }
    }

  }
}