import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Switch, Button, TouchableOpacity, ToastAndroid } from "react-native";
import { ScrollView, TextInput } from "react-native";
import { CheckBox, Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import CustomIndicator from "../CustomIndicator";

import { getForm, sendForm, submitForm } from "../../redux/actions/formActions";
import { selectForm, selectResponses } from "../../redux/features/form/formSlice";
import { selectUser } from "../../redux/features/auth/authSlice";

const CheckListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRoute();

  const { id, title, code_form } = router.params;

  const formObjectState = useSelector((state) => state.form)
  const detailForm = useSelector((state) => selectForm(state))
  const userInfo = useSelector((state) => selectUser(state))
  const responsesCode = useSelector((state) => selectResponses(state))
  const [formQuestions, setFormQuestions] = useState([])

  useEffect(() => {
    const params = {
      codeForm: code_form,
      id_user: userInfo.user.id,
    }
    dispatch(getForm(params))
  },[])

  useEffect(() => {
    if (detailForm.questions.length > 0) {
      setFormQuestions(detailForm.questions)
    }
  },[detailForm])

  useEffect(() => {
    if (responsesCode) {
      sendResponses()
    }
  }, [responsesCode])

  const backPage = () => {
    navigation.goBack()
  }

  const onSubmit = () => {
    buildBody()
    //let body = {
    //  'id_user': user.id,
    //}
    //dispatch(submitForm({code_form, body}))
    /*backPage();
    ToastAndroid.show(
      'Gracias por las respuestas',
      ToastAndroid.LONG
    )*/
  };

  const submitFullForm = (body) => {
    dispatch(submitForm({body}))
    //backPage();
  }

  const buildBody = () => {
    let canSubmit = true;
    let body = {
      id_user: userInfo.user.id,
      code: code_form,
      responses: [],
    }
    for (let question of formQuestions) {
      if (question.question_type == 'multiple choice') {
        const choice_answer = question.choices.filter((choice) =>  {
          return choice.is_answer
        })
        if (choice_answer.length == 0) { 
          errorCompleteForm(); 
          canSubmit = false;
          break;
        } else {
          body['responses'].push({
            id_question: question.id,
            answer: (choice_answer[0].id).toString()
          })
        }
      } else if (question.question_type == 'short') {
        if (question.answer_key == '' ) {
          errorCompleteForm();
          canSubmit = false;
          break;
        } else {
          body['responses'].push({
            id_question: question.id,
            answer: question.answer_key 
          })
        }
      }
    }
    if (canSubmit) {
      submitFullForm(body)
    }
  }

  const errorCompleteForm = () => { 
    ToastAndroid.show(
      'Falta completar respuestas',
      ToastAndroid.LONG
    )
  }

  const sendResponses = () => {
    let codeResponse = responsesCode
    if (detailForm.validate_response.status) {
      codeResponse = detailForm.validate_response.responses_code
    }
    let body = {
      responses_code: codeResponse,
    }
    dispatch(sendForm({body}))
  }


  
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

  const onChangeForm = (question_id, choice_id, text) => {
    const questionObj = formQuestions.find(question => question.id == question_id)
    const newQuestionObj = {...questionObj, answer_key: text }
    const newFormQuestions = formQuestions.map(question => question.id == question_id ? newQuestionObj : question)
    setFormQuestions(newFormQuestions)
  }
  
  return (
    <View className="flex-1">
      {/* Header */}
      <View className="flex-row py-2 items-center space-x-2 bg-black">
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
          <Text className="font-bold text-lg text-white">CHECKLIST - {title}</Text>
        </View>
      </View>
      {/* Body  */}
      {
        formObjectState.isLoading ? (
          <CustomIndicator />
        ) : (
          detailForm.validate_response.status || responsesCode ? (
            <View className="flex-1 m-4">
              <Text className="text-center font-medium text-2xl pb-2">
                Ya contestaste este checklist, ¿Enviar las respuestas?
              </Text>
              <Button title="Enviar respuestas" onPress={sendResponses} />
            </View>
          ) : (
            <ScrollView className="my-auto">
              <View className="flex-1 px-4">
                {
                  formQuestions.length > 0 ? (
                    <View className="flex-1">
                      {
                        formQuestions.map((obj_question,index_question) => (
                          
                          <View key={"q_" + String(index_question)}>
                            {
                              obj_question.validate_label && (
                                <View className="rounded-lg bg-black text-center m-2">
                                  <Text className="text-white text-center p-1 text-lg font-extrabold">
                                    { obj_question.validate_label }
                                  </Text>
                                </View>
                              )
                            }
                            <Text className="text-center font-bold text-lg">
                              { obj_question.question }
                            </Text>
                            {
                              obj_question.question_type == 'multiple choice' && (
                                obj_question.choices.map((obj_choice, index_choice) => (
                                  <View key={"ch_" + String(index_choice)}
                                        className="bg-transparent">
                                    <CheckBox
                                      containerStyle={{backgroundColor: 'transparent',
                                                      borderWidth: 0}}
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
                                      inputStyle={{fontSize: 15}}
                                      placeholder=""
                                      onChangeText={(text) => onChangeForm(obj_question.id, obj_choice.id, text)}
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
        )
      }
      {/* Footer */}
      {
        !(detailForm.validate_response.status || responsesCode) && (
          <View className="px-4 pb-4">
            <Button title="Enviar" onPress={onSubmit} disabled={formObjectState.isLoading}/>
          </View>
        )
      }
      
    </View>
  );
};

export default CheckListScreen;
