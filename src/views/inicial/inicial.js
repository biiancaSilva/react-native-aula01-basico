import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';

function inicial() { 

    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Inicial</Text>

                <TouchableOpacity style={estiloInicial.botaoContainer} > 
                    <Text style={estiloInicial.botaoTexto}>Sobre o App</Text> 
                </TouchableOpacity>

               <TouchableOpacity style={estiloInicial.botaoContainer} >
                    <Text style={estiloInicial.botaoTexto}>Detalhes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} >
                    <Text style={estiloInicial.botaoTexto}>História</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} >
                    <Text style={estiloInicial.botaoTexto}>Notícias</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default inicial;