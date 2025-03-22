pipeline {
    agent any

    environment {
        // Use TAG_NAME if available, otherwise use BUILD_NUMBER
        DOCKER_IMAGE_TAG = "${env.TAG_NAME ?: "build-${env.BUILD_NUMBER}"}"
        DOCKER_IMAGE_NAME = "my-app" // Name of the Docker image
    }

    stages {
        // Stage 1: Build Docker Image
        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image with tag: ${DOCKER_IMAGE_TAG}"
                    // sh """
                    //     docker build -t ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} -f ./Dockerfile .
                    // """
                }
            }
        }

        // // Stage 2: Update docker-compose.yml
        // stage('Update docker-compose.yml') {
        //     steps {
        //         script {
        //             echo "Updating docker-compose.yml with new image version: ${DOCKER_IMAGE_TAG}"
        //             sh """
        //                 # Replace the image version in docker-compose.yml
        //                 sed -i "s|${DOCKER_IMAGE_NAME}:.*|${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}|g" ./docker-compose.yml

        //                 # Print the updated docker-compose.yml for verification
        //                 cat ./docker-compose.yml
        //             """
        //         }
        //     }
        // }

        // // Stage 3: Deploy with docker-compose
        // stage('Deploy with docker-compose') {
        //     steps {
        //         script {
        //             echo "Deploying with docker-compose"
        //             sh """
        //                 docker-compose up -d
        //             """
        //         }
        //     }
        // }
    }

    // Post-build actions (optional)
    post {
        success {
            echo "Pipeline succeeded! Docker image ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} was built and deployed."
        }
        failure {
            echo "Pipeline failed. Check the logs for details."
        }
    }
}