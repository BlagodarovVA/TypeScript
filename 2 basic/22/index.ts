let msg: 'Hello' = 'Hello';
msg = "Hello";


const serverConfig: {protocol: 'http' | 'https', port: 3000 | 3001} = {
    protocol: 'https',
    port: 3001
}

const startServer: (protocol: 'http' | 'https', port: 3000 | 3001) => string =  // аннотация функции
                    (protocol: 'http' | 'https', port: 3000 | 3001              // объявление функции
                    ): 'Server started' => {
    console.log(`Server started on ${protocol}://server:${port}`);

    return 'Server started';
}

startServer(serverConfig.protocol, serverConfig.port);


// псевдоним типа, с большой буквы
type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in';
type AnimationID = string | number;

function createAnimation(id: AnimationID, 
                         animName: string, 
                         timingFunc: AnimationTimingFunc = 'ease',
                         duration: number,
                         iterCount: 'infinite' | number
): void {
    // const elem = document.querySelector(`#${id}`) as HTMLElement;

    // if (elem) {
        console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
        // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
    // }
}

createAnimation('id', 'fade', 'ease-in', 5, 'infinite');
