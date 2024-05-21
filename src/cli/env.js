function env() {
    const envVars = process.env;
    const mitsoEnvVars = Object.keys(envVars)
        .filter(key => key.startsWith('MITSO_'))
        .map(key => `${key}=${envVars[key]}`)
        .join('; ');

    console.log(mitsoEnvVars);
}

env();
