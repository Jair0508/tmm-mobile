import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet, Text, View, TextInput, Image, Touchable } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../redux/actions/authActions'


const Login = () => {
  const dispatch = useDispatch();

  let dataUser = {
    username: 'aaa',
    email: 'emaik',
    password: 'asdasd'
  }

  const loginPress = () => {
    dispatch(login(dataUser));
  }

  return (
    <View style={styles.container}>
      {/* <Image
        source={require("../../assets/KeybeltLogo.png")}
        style={styles.logo}
      /> */}
      <View style>
        <Text style={styles.title}>MECANIZADO Y METALIZADO</Text>
      </View>
      <TextInput 
        style={styles.textInput} 
        placeholder='Ingresa tu nombre completo.' />
      <TextInput 
        style={styles.textInput} 
        placeholder='Ingresa tu correo electrónico.' />
      <TextInput 
        style={styles.textInput} 
        placeholder='Ingresa tu clave.' 
        secureTextEntry={true} />
      <Text 
        style={styles.forgot}>
          Olvidaste tu contraseña?
      </Text>
      <Text 
        style={styles.forgot}>
          Privacidad
      </Text>
      <TouchableOpacity onPress={() => loginPress()}>
        <Text>
          Iniciar Sesion
        </Text>
      </TouchableOpacity>
      <StatusBar translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaefe5',
    justifyContent: 'center',
    padding: 15,
  },

  // logo: {
  //   resizeMode: 'contain',
  //   width: '100%',
  //   height: '30%',
  //   alignSelf: 'center',
  // },

  title: {
    fontSize: 50,
    fontWeight: '800',
    color: '#687775',
    paddingStart: 20,
    textAlign: 'center'
  },

  forgot: {
    color: '#693532',
    textAlign: 'right',
  },

  textInput:{ 
    padding: 10,
    paddingStart: 20,
    width: '100%',
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: '#92776f',
    backgroundColor: 'white',
  }
});

export default Login