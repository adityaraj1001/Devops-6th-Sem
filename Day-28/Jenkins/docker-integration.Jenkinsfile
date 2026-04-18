pipeline {
    agent any

    environment {
        IMAGE_NAME = "devops-app"
        CONTAINER_NAME = "devops-container"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/YOUR_USERNAME/Devops-6th-Sem.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f $CONTAINER_NAME || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 8080:80 --name $CONTAINER_NAME $IMAGE_NAME'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful 🚀'
        }
        failure {
            echo 'Deployment Failed ❌'
        }
    }
}
