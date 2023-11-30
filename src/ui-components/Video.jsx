/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, View } from "@aws-amplify/ui-react";
export default function Video(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="844px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(4,125,149,1)"
      {...getOverrideProps(overrides, "Video")}
      {...rest}
    >
      <Flex
        width="390px"
        height="67px"
        {...getOverrideProps(overrides, "NavBarHeader")}
      ></Flex>
      <Flex
        width="157px"
        height="34px"
        {...getOverrideProps(overrides, "Heading")}
      ></Flex>
      <Image
        width="307px"
        height="369px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="118px"
        left="43px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "IMG_8446 1")}
      ></Image>
    </View>
  );
}
