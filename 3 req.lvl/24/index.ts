// type Config = {protocol: 'http' | 'https', port: 3000 | 3001};
interface Config {                  // принято название писать с большой буквы. бывает начиная с 'I'
    protocol: 'http' | 'https';
    port: 3000 | 3001;
    log: (msg: string) => void
}

// type Role = {
//     role: string;
// };
// type ConfigWithRole = Config & Role;        // соединяет 2 типа в 1

interface Role {
    role: string;
}

interface ConfigWithRole extends Config, Role {     // объединение 2 интерфейсов
    test: string                                  // + новые свойства
};

const serverConfig: ConfigWithRole = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    test: 'dfgsdgfsd',
    log: (msg: string): void => console.log(msg)
}

// const backupConfig: ConfigWithRole = {
//     protocol: 'http',
//     port: 3000,
//     role: 'dba'
// }

type StartFunc = (protocol: 'http' | 'https',           // нельзя записать в виде интерфейса
                  port: 3000 | 3001, 
                  log: (msg: string) => void
) => string;

const startServer: StartFunc =                                      // аннотация функции
                    (protocol: 'http' | 'https', 
                     port: 3000 | 3001, 
                     log: (msg: string) => void                     // объявление функции
): 'Server started' => {
    log(`Server started on ${protocol}://server:${port}`);

    return 'Server started';
}

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);


interface Styles {
    [key: string]: string
}

const styles: Styles = {
    position: 'absolute',
    top: '20px',
    left: '50px'
}