pipeline {
  agent any

  environment {
    DOCKER_IMAGE = "amartella76/fastify-demo"
    DOCKER_TAG = "v1"
  }

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

    stage('Deploy') {
      steps {
        echo "Deploying"
      }
    }
  }
}
