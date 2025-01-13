module.exports = {
    apps: [
        {
            name: "oopgen",
            script: "npm",
            args: "start",
            instances: "max",
            exec_mode: "cluster",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};