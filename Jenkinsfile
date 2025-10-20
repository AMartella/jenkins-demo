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
          docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
        }
      }
    }

    stage('Push to Registry') {
      steps {
        script {
          docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials-id') {
            docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push()
          }
        }
      }
    }

    stage ('Test') {
      steps {
        script {
            docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").inside {
                sh "npm test"
            }
        }
      }
    }

    stage('Deploy') {
      steps {
        sh "docker run -d -p 3000:3000 ${DOCKER_IMAGE}:${DOCKER_TAG}"
      }
    }
  }
}
