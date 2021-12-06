import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial({ navigation }) {

    const abrirDetalhe = () => {
    navigation.navigate('Detalhe')
    }
    
    const abrirSobreApp = () => {
    navigation.navigate('SobreApp')
    }
    

    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Inicial</Text>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirSobreApp}> 
                    <Text style={estiloInicial.botaoTexto}>Sobre</Text> 
                </TouchableOpacity>

               <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirDetalhe}>
                    <Text style={estiloInicial.botaoTexto}>Detalhes</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Inicial;
