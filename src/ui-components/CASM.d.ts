/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CASMOverridesProps = {
    CASM?: PrimitiveOverrideProps<ViewProps>;
    Heading40961791?: PrimitiveOverrideProps<FlexProps>;
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    Heading40961794?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Heading40961795?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type CASMProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CASMOverridesProps | undefined | null;
}>;
export default function CASM(props: CASMProps): React.ReactElement;
