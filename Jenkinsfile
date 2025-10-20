pipeline {
  agent any

  stages {
    stage('Build Docker Image') {
      steps {
        echo "Building Docker Image"
      }
    }

    stage('Push to Registry') {
      steps {
        script {
          echo "Pushing to Docker Hub"
        }
      }
    }

    stage ('Test') {
      steps {
        script {
            echo "Testing"
        }
      }
    }

    stage('Deploy') {
      steps {
        script {
            echo "Deploying"
        }
      }
    }
  }
}

