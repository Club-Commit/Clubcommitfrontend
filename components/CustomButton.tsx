import { ButtonProps } from "@/types";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function CustomButton({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  textClassName,
  ...props
}: ButtonProps) {
  const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
    switch (variant) {
      case "secondary":
        return "bg-light-secondary dark:bg-dark-secondary";
      case "success":
        return "bg-light-success dark:bg-dark-success";
      case "danger":
        return "bg-light-error dark:bg-dark-error";
      case "outline":
        return "bg-transparent border border-light-subtext dark:border-dark-subtext";
      default:
        return "bg-light-primary dark:bg-dark-primary";
    }
  };

  const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
    switch (variant) {
      case "primary":
        return "text-light-text dark:text-dark-text";
      case "secondary":
        return "text-light-text dark:text-dark-text";
      case "danger":
        return "text-light-error dark:text-dark-error";
      case "success":
        return "text-light-success dark:text-dark-success";
      default:
        return "text-white"; // default on brand buttons
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full px-6 py-4 rounded-button flex flex-row justify-center items-center shadow-soft ${getBgVariantStyle(
        bgVariant
      )} ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft className="mr-2" />}
      <Text
        className={`capitalize font-ui text-button ${getTextVariantStyle(textVariant)} ${textClassName}`}
      >
        {title}
      </Text>

      {IconRight && <IconRight className="ml-2" />}
    </TouchableOpacity>
  );
}
