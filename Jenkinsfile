pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    triggers {
        pollSCM('H/2 * * * *')
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Static Analysis') {
            steps {
                echo 'Running static analysis (placeholder for SonarQube)'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deliver') {
            steps {
                sh 'tar -czf release.tar.gz dist'
                archiveArtifacts artifacts: 'release.tar.gz', fingerprint: true
            }
        }

        stage('Deploy to Dev Env') {
            steps {
                sh './scripts/deploy-dev.sh'
            }
        }

        stage('Deploy to QAT Env') {
            steps {
                sh './scripts/deploy-qat.sh'
            }
        }

        stage('Deploy to Staging Env') {
            steps {
                sh './scripts/deploy-staging.sh'
            }
        }

        stage('Deploy to Production Env') {
            steps {
                sh './scripts/deploy-prod.sh'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}