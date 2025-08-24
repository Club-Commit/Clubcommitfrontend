import CustomButton from "@/components/CustomButton";
import { onboardingItems } from "@/constants";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Href, router } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

export default function Onboarding() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboardingItems.length - 1;

  return (
    <SafeAreaView className="h-full bg-light-background dark:bg-dark-background flex items-center justify-between">
      {/* Skip Button */}
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up" as Href);
        }}
        className="w-full justify-end items-end p-5"
      >
        <View>
          <Text className="text-light-text dark:text-dark-text text-base font-ui uppercase">
            Skip
            <View className="inline-block ml-2">
              <AntDesign name="arrowright" size={24} color="#FF6B6B" className="ml-px" />
            </View>
          </Text>
        </View>
      </TouchableOpacity>

      {/* Swiper */}
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-6 h-1 mx-1 rounded-full bg-light-surface dark:bg-dark-surface" />}
        activeDot={<View className="w-6 h-1 mx-1 bg-light-primary dark:bg-dark-primary rounded-full" />}
        onIndexChanged={(index) => {
          setActiveIndex(index);
        }}
      >
        {onboardingItems.map((onboardingItem, index) => (
          <View
            key={onboardingItem.title + index}
            className="flex items-center justify-center p-5"
          >
            {/* Illustration */}
            <Image
              source={onboardingItem.image}
              className="h-[360px] w-full"
              resizeMode="contain"
            />

            {/* Text Content */}
            <View className="w-full flex flex-col items-center justify-center mt-10 px-6">
              <Text className="text-h1 font-heading text-light-text dark:text-dark-text text-center">
                {onboardingItem.title}
              </Text>
              <Text className="text-body font-body text-light-subtext dark:text-dark-subtext text-center mt-3">
                {onboardingItem.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>

      {/* CTA Button */}
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() => {
          if (isLastSlide) {
            router.push("/(auth)/sign-up" as Href);
          } else {
            swiperRef.current?.scrollBy(1);
          }
        }}
        className="mt-10 w-11/12 bg-light-primary dark:bg-dark-primary"
        textClassName="text-white font-ui text-button"
      />
    </SafeAreaView>
  );
}
