import { StyleSheet } from 'react-native';

const estiloDetalhe = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#800000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    borda: {
        backgroundColor: '#DCDCDC',
        width: '80%',
        height: '90%',
        borderRadius: 10,
    },

    texto01: {
        fontSize: 25,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },

    texto: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        padding: 10,
        width: '100%',
        height: '90%',
        textAlign: "justify",
    },
    texto02: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        padding: 10,
        width: '100%',
        height: '90%',
        textAlign: "justify",
    },
    texto03: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        padding: 10,
        width: '100%',
        height: '90%',
        textAlign: "justify",
    },
    
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight:'bold'
    },
});
export default estiloDetalhe;
