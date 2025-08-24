import { InputFieldProps } from "@/types";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function InputField({
  label,
  labelStyle,
  placeholder,
  icon,
  rightIcon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps & { rightIcon?: React.ReactNode }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className={`${containerStyle}`}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          {/* Label */}
          <Text
            className={`capitalize text-base font-heading mb-2 text-light-subtext dark:text-dark-subtext ${labelStyle}`}
          >
            {label}
          </Text>

          {/* Input Container */}
          <View
            className={`
              flex flex-row items-center 
              bg-light-surface dark:bg-dark-surface 
              border rounded-full px-4 
              ${isFocused ? "border-light-primary dark:border-dark-primary" : "border-light-subtext/20 dark:border-dark-subtext/20"}
            `}
          >
            {/* Left Icon */}
            {icon && (
              <Image
                source={icon}
                className={`w-6 h-6 mr-3 ${iconStyle}`}
                resizeMode="contain"
              />
            )}

            {/* Input */}
            <TextInput
              className={`
                flex-1 py-3 font-body text-body text-light-text dark:text-dark-text
                ${inputStyle} ${className}
              `}
              placeholder={placeholder}
              placeholderTextColor="#999999"
              secureTextEntry={secureTextEntry}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...props}
            />

            {/* Right Icon (e.g. password toggle) */}
            {rightIcon && <View className="ml-2">{rightIcon}</View>}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
