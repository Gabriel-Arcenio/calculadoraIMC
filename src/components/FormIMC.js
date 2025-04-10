
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';

const FormIMC = () => {
const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');
const [imc, setImc] = useState(null);

const calcularIMC = () => {
if (peso && altura) {
     const alturaMetros = parsefloat(altura)/100;
    const imcCalculado = (parsefloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcCalculado);
    }
};

return (
<View style={styles.formContainer}>
<TextInput
 style={styles.Input}
    placeholder="Peso (kg)"
keyboardType= "numeric"
 value={peso}
onChangeText={setPeso}
/>

<TextInput
    styles={styles.Input}
    placeholder="Altura (cm)"
    keyboardType="numeric"
    value={altura}
    onChangeText={setAltura}
/>

    <Button title="Calcular IMC" onPress={calcularIMC} />
    {imc && <Result imc={Inc}/> }
    </View>
);
};

    const styles = StyleSheet.create({
    formContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 10,
    },

    Input: {
         height: 40,
    borderColor: 'gray',
    borderwidth: 1,
    marginBottom: 12,
    paddingHorizontal: 5,
    borderRadius: 5,
    },
});

    export default FormIMC;