pipeline {
  agent any

  tools {
      nodejs "node"
  }

  stages {
    stage('CleanUp'){
        steps{
            deleteDir()
        }
    }  
    stage('Build') {
      steps {
        git(url: 'https://github.com/NJU-Agile/zf-frontend.git', branch: 'master')
        sh 'npm config get cache'
        sh 'npm install'
      }
    }

  }
}