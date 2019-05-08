const React = require('react');
const Text = require('react-native').Text;
const View = require('react-native').View;
const Button = require('react-native').Button;
const AppRegistry = require('react-native').AppRegistry;

const gerarNumeroRandomico = () => {
    const numeroAleatorio = Math.floor(Math.random() * 10);
    // eslint-disable-next-line no-undef
    alert(numeroAleatorio);
};

const App = () => (
    <View>
        <Text>Gerador de Numeros Randomicos</Text>
        <Button 
            title="Gerar"
            onPress={gerarNumeroRandomico}
        />
    </View>
);

AppRegistry.registerComponent('randomNumbers', () => App);
