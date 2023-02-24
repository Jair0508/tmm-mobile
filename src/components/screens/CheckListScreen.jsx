import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Switch, Button } from "react-native";

const CheckListScreen = () => {
  const navigation = useNavigation()
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const goToBack = () =>{
    navigation.goBack()
  }
  
  return (
    <View>
      <Text>¿La respuesta es sí o no?</Text>
      <Controller
        name="respuesta"
        control={control}
        defaultValue={false}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Switch
            value={value}
            onValueChange={val => onChange(val)}
          />
        )}
      />
      {errors.respuesta && <Text>Debes responder la pregunta</Text>}
      <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
      <Button title="Salir" onPress={goToBack} />
    </View>
  );
};

export default CheckListScreen;
