import { LibztPlugin } from 'capacitor-libzt-plugin';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    LibztPlugin.echo({ value: inputValue })
}
