pipeline {
  agent any

  environment {
    DOCKER_IMAGE = "amartella76/fastify-demo"
    DOCKER_TAG = "v1"
  }

  stages {

    stage('Build Docker Image') {
      steps {
        script {
          echo "Building docker image"
        }
      }
    }

    stage('Push to Registry') {
      steps {
        script {
            echo "Push to Registry"
        }
      }
    }

    stage ('Test') {
      steps {
        script {
            echo "Test"
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
