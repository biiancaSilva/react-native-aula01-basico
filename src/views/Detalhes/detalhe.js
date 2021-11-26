import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloDetalhe from './estiloDetalhe';

function detalhe() {
    return (
        
        <View style={estiloDetalhe.container}>
            <View style={estiloDetalhe.borda}>

            
            <Text style={estiloDetalhe.texto01}> História do São Paulo Futebol Clube </Text>
            <Text style={estiloDetalhe.texto}>O São Paulo Futebol Clube foi fundado em 25 de janeiro de 1930 
            e atualmente tem 91 anos de existência. O clube nasceu da união de dissidentes do Club Athlético 
            Paulistano e da Associação Athlética das Palmeiras, tendo sua ata de fundação assinada na
             madrugada do dia 26 daquele mês devido ao tardar da reunião e à confecção dos estatutos.</Text>

            <Text style={estiloDetalhe.texto02}> Teve suas atividades interrompidas em maio de 1935, e as 
            retomado em dezembro do mesmo ano. No futebol, mesmo sendo um dos clubes mais "jovens" é um dos
            clubes mais bem sucedidos do Brasil, sendo que, dentre seus principais títulos, destacam-se três 
            mundiais (recorde absoluto a nível nacional), três Copas Libertadores (recorde nacional compartilhado 
            com Santos e Grêmio),uma Copa Sul-Americana e seis Campeonatos Brasileiros. Quanto a 
            títulos internacionais, o São Paulo, com 12 conquistas, é o terceiro clube da América 
            do Sul com o maior número de troféus, ficando atrás somente de Boca Juniors e Independiente.
            No que diz respeito ao somatório de títulos oficiais de abrangência nacional e internacional de 
            clubes brasileiros, em janeiro de 2021, o São Paulo figurava como o maior campeão do Brasil,
            com dezoito conquistas.
             </Text>
                
            <Text style={estiloDetalhe.texto03}>De acordo com o estatuto do clube, o símbolo do Tricolor 
            Paulista é formado por um triângulo isósceles branco, invertido, com base maior elevada por 
            um retângulo com altura igual à metade da lateral do referido triângulo. Dentro dessa parte 
            alongada encontra-se outro retângulo, de cor preta, com as iniciais SPFC em branco. No interior 
            do triângulo uma faixa branca de largura igual a um quarto da lateral menor com dois triângulos 
            escalenos, um vermelho à esquerda e outro preto, à direita. As estrelas foram introduzidas 
            posteriormente e também tem um significado especial. As duas douradas, gravadas no escudo em 1955
            e, posteriormente, no uniforme em 1997, representam os recordes mundiais e olímpicos</Text>

<TouchableOpacity style={estiloDetalhe.botaoContainer}>
   <Text style={estiloDetalhe.botaoTexto}>Voltar</Text>
</TouchableOpacity>

</View>
</View>
)
}
export default detalhe;