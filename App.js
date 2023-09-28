import { useState } from 'react';
import { StyleSheet, Text, View,TextInput, Button} from 'react-native';

export default function App() {
const [texto,setTexto] = useState("");
const [contador,setContador] = useState(0);

function contarIslotes() {
  let c=0;
  for(let i=0; i<texto.length; i++) {
    if(texto[i - 1] === texto[i + 1]) {
      c++;
    }
  }
  setContador(c);
}

  return (
    <View>
      <TextInput
        onChangeText={setTexto}
        value={texto}
      />
      <Button
        title="Contar"
        onPress={contarIslotes}
      />
      <Text>Islotes: {contador}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});B
