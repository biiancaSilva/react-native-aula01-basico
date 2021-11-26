import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloSobreApp from './estiloSobreApp';

function SobreApp() {

    return(

        <View style={estiloSobreApp.container}>
            <View style={estiloSobreApp.borda}>
                 
            <Text style={estiloSobreApp.texto01}> São Paulo Futebol Clube </Text>
             <Text style={estiloSobreApp.texto}> O São Paulo Futebo Clube foi fundado em
              25 de janeiro de 1930 e tem 91 anos, seu mascote é o Paulo de Tarso, o nome
              do seu estádio é "Estádio Cícero Pompeu de Toledo" mais conhecido como Morumbi. Seus 
              principais rivais são: O Corinthians, o Palmeiras e o Santos</Text>

                <TouchableOpacity style={estiloSobreApp.botaoContainer}>
                   <Text style={estiloSobreApp.botaoTexto}>Voltar</Text> 
                </TouchableOpacity>  
            </View>
        </View>
    )
}
export default SobreApp;