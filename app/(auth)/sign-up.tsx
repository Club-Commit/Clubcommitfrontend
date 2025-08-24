import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import Feather from '@expo/vector-icons/Feather';
import { router } from "expo-router";
import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-dark-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6">

            {/* Header */}
            <Animated.View
              entering={FadeInUp.duration(600).springify()}
              className="mt-10 mb-8"
            >
              <Text className="text-h1 font-heading text-light-text dark:text-dark-text text-center">
                Create Account
              </Text>
              <Text className="text-body font-body text-light-subtext dark:text-dark-subtext text-center mt-2">
                Join Commit and start building meaningful connections.
              </Text>
            </Animated.View>

            {/* Form */}
            <Animated.View
              entering={FadeInUp.delay(200).duration(600).springify()}
              className="gap-5"
            >
              <InputField
                label="Full Name"
                placeholder="Enter your name"
              />
              <InputField
                label="Email"
                placeholder="Enter your email"
                keyboardType="email-address"
              />
              <InputField
                label="Password"
                placeholder="Enter your password"
                secureTextEntry={!passwordVisible}
                rightIcon={
                  <TouchableOpacity onPress={togglePasswordVisibility}>

                    <Feather name={passwordVisible ? 'eye-off' : 'eye'} size={18} color="#FF6B6B" />

                  </TouchableOpacity>
                }
              />
            </Animated.View>

            {/* CTA Button */}
            <Animated.View
              entering={FadeInUp.delay(400).duration(600).springify()}
              className="mt-10"
            >
              <CustomButton
                title="Sign Up"
                onPress={() => router.push("/(auth)/welcome")}
                bgVariant="primary"
              />
            </Animated.View>

            {/* Footer */}
            <View className="flex flex-row justify-center items-center mt-6">
              <Text className="text-body font-body text-light-subtext dark:text-dark-subtext">
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
                <Text className="text-light-primary dark:text-dark-primary font-ui ml-2">
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
