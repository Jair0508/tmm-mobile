import React from "react";
import { ActivityIndicator, View } from "react-native";

const CustomIndicator = ({ ...props }) => {
  return (
    <View className="flex-1 justify-center items-center my-3">
      <ActivityIndicator size="large" color="#185ace" {...props} />
    </View>
  );
};

export default CustomIndicator;
