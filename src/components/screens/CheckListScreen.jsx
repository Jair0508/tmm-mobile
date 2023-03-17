import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Switch, Button, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { CheckBox, Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import CustomIndicator from "../CustomIndicator";

import { getForm } from "../../redux/actions/formActions";
import { selectForm } from "../../redux/features/form/formSlice";
import { TextInput } from "react-native";

const CheckListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRoute();

  const { id, title, code_form } = router.params;

  const formObjectState = useSelector((state) => state.form)
  const detailForm = useSelector((state) => selectForm(state))
  const [formQuestions, setFormQuestions] = useState([])

  useEffect(() => {
    const params = {
      codeForm: code_form
    }
    dispatch(getForm(params))
  },[])

  const onSubmit = data => {
    console.log(data);
  };

  const backPage = () => {
    navigation.goBack()
  }

  useEffect(() => {
    if (detailForm.questions.length > 0) {
      setFormQuestions(detailForm.questions)
    }
  },[detailForm])
  
  const pressForm = (question_id, choice_id) => {
    const questionObj = formQuestions.find(question => question.id == question_id)
    let newChoices = []
    for (let choice of questionObj.choices) {
      if (choice.id == choice_id) {
        newChoices.push({...choice, is_answer: true})
      } else {
        newChoices.push({...choice, is_answer: false})
      }
    }
    const newQuestionObj = {...questionObj, choices: newChoices}
    const newFormQuestions = formQuestions.map(question => question.id == question_id ? newQuestionObj : question)
    setFormQuestions(newFormQuestions)
  }

  const onChangeForm = (question_id, choice_id) => {
    console.log(question_id, choice_id)
  }
  
  return (
    <View className="flex-1">
      {/* Header */}
      <View className="flex-row py-2 items-center space-x-2 bg-slate-200">
        <TouchableOpacity
          onPress={backPage}
          className="bg-slate-100 rounded-full p-2 ml-2 mr-2"
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={25}
          ></MaterialCommunityIcons>
        </TouchableOpacity>
        <View className="flex-1 items-start">
          <Text className="font-bold text-lg">CheckList - {title}</Text>
        </View>
      </View>
      {/* Body  */}
      {
        formObjectState.isLoading ? (
          <CustomIndicator />
        ) : (
          <ScrollView className="my-auto">
            <View className="flex-1 px-4">
              <View className="rounded-lg bg-black text-center m-2">
                <Text className="text-white text-center p-1 text-lg font-extrabold">
                  1.- PERSONAL
                </Text>
              </View>

              {
                formQuestions.length > 0 ? (
                  <View className="flex-1">
                    {
                      formQuestions.map((obj_question,index_question) => (
                        <View key={"q_" + String(index_question)}>
                          <Text className="text-center font-bold">
                            {index_question + 1} .- { obj_question.question }
                          </Text>
                          {
                            obj_question.question_type == 'multiple choice' && (
                              obj_question.choices.map((obj_choice, index_choice) => (
                                <View key={"ch_" + String(index_choice)}>
                                  <CheckBox
                                    title={obj_choice.choice}
                                    checked={obj_choice.is_answer}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    onPress={() => pressForm(obj_question.id, obj_choice.id)}
                                  />
                                </View>
                              ))
                            )
                          }
                          {
                            obj_question.question_type == 'short' && (
                              obj_question.choices.map((obj_choice, index_choice) => (
                                <View key={"ch_" + String(index_choice)}>
                                  <Input
                                    placeholder=""
                                    onChangeText={() => onChangeForm(obj_question.id, obj_choice.id)}
                                  />
                                </View>
                              ))
                            )
                          }
                          {
                            obj_question.question_type == 'paragraph' && (
                              obj_question.choices.map((obj_choice, index_choice) => (
                                <View key={"ch_" + String(index_choice)}>
                                  <TextInput
                                    multiline={true}
                                    numberOfLines={4}
                                    placeholder=""
                                    onChangeText={() => onChangeForm(obj_question.id, obj_choice.id)}
                                  />
                                </View>
                              ))
                            )
                          }
                        </View>
                      ))
                    }
                  </View>
                ) : (
                  <Text>No hay preguntas</Text>
                )
              }
            </View>
          </ScrollView>
        )
      }
      {/* Footer */}
      <View className="px-4 pb-4">
        <Button title="Enviar" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default CheckListScreen;
