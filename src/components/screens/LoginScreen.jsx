import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet, Text, View, TextInput, Image, Touchable } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from '../../redux/actions/authActions'
import { useState } from 'react';
import { useEffect } from 'react';
import { logoutUser } from '../../redux/features/auth/authSlice';


const Login = () => {
  const dispatch = useDispatch();

  const initialData = {
    username: '',
    email: '',
    password: ''
  }

  const [dataUser, setDataUser] = useState(initialData)
  const authState = useSelector(state => state.auth); 

  const loginPress = () => {
    dispatch(login(dataUser));
  }

  useEffect(() => {
    dispatch(logoutUser())
    //dispatch(logout({}))
  }, [])

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
        value={dataUser.username}
        onChangeText={text => setDataUser({...dataUser, username: text })}
        placeholder='Ingresa tu nombre completo.' />
      <TextInput 
        style={styles.textInput} 
        value={dataUser.email}
        onChangeText={text => setDataUser({...dataUser, email: text })}
        placeholder='Ingresa tu correo electrónico.' />
      <TextInput 
        style={styles.textInput} 
        value={dataUser.password}
        onChangeText={text => setDataUser({...dataUser , password: text})}
        placeholder='Ingresa tu clave.' 
        secureTextEntry={true} />
      <TouchableOpacity onPress={() => loginPress()} className="p-2 bg-slate-600 rounded-lg my-3 mb-5">
        <Text className="text-xl font-bold text-center text-white ">
          INGRESAR
        </Text>
        </TouchableOpacity>
        
      <Text 
      className="text-blue-500"
        style={styles.forgot}>
          Olvidaste tu contraseña?
      </Text>
      <Text 
      className="text-blue-500"
        style={styles.forgot}>
          Privacidad
      </Text>
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
    textAlign: 'left',
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