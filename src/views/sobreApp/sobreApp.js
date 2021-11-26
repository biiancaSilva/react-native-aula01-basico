import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloSobreApp from './estiloSobreApp';

function sobreApp() {

    return(

        <View style={estiloSobreApp.container}>
            <View style={estiloSobreApp.borda}>
                 
            <Text style={estiloSobreApp.texto01}> Sobre o App </Text>
             <Text style={estiloSobreApp.texto}> Aqui vc torcedor(a) tricolor poderá conhecer a história 
             desse time q é gigante, as novidades q rolam dentro dos treinos, campos, nas estradas e na parte 
             administrativa também, nosso objetivo é te deixar o mais antenado(a) possível sobre seu time do coração
             e também ser uma área acolhedora para você que apoia tanto esse clube. </Text>
             
             <Text style={estiloSobreApp.texto02}> -- desenvolvido com carinho por Bianca Vitória da Silva </Text>

                <TouchableOpacity style={estiloSobreApp.botaoContainer}>
                   <Text style={estiloSobreApp.botaoTexto}>Voltar</Text> 
                </TouchableOpacity>  
            </View>
        </View>
    )
}
export default sobreApp;
