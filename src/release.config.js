module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/PartORG/react-app",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator", 
        "@semantic-release/github"
    ]
}