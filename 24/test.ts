const serverNewConfig = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    test: 'dfgsdgfsd'
}

const backupConfig: BasicConfig = {     // типизация входного объекта
    protocol: 'http',
    port: 3000
};

interface BasicConfig {
    protocol: string;
    port: number;
}

// в анотации функции указываем структуру интерфейса
const startNewServer = (config: BasicConfig): 'Server started' => {
    console.log(`Server started on ${config.protocol}://server:${config.port}`);

    return 'Server started';
}

startNewServer(serverNewConfig);
startNewServer(backupConfig);