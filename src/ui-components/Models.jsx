/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, View } from "@aws-amplify/ui-react";
export default function Models(props) {
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
      {...getOverrideProps(overrides, "Models")}
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
        width="240px"
        height="206px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="464px"
        left="75px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image41231658")}
      ></Image>
      <Image
        width="268px"
        height="253px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="153px"
        left="54px"
        padding="0px 0px 0px 0px"
        objectFit="unset"
        {...getOverrideProps(overrides, "image41231659")}
      ></Image>
    </View>
  );
}
