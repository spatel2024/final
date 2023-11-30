/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SurveyOverridesProps = {
    Survey?: PrimitiveOverrideProps<ViewProps>;
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    Heading40961800?: PrimitiveOverrideProps<FlexProps>;
    Radio40961801?: PrimitiveOverrideProps<FlexProps>;
    Radio40961802?: PrimitiveOverrideProps<FlexProps>;
    Radio40961803?: PrimitiveOverrideProps<FlexProps>;
    Radio40961804?: PrimitiveOverrideProps<FlexProps>;
    Radio40961805?: PrimitiveOverrideProps<FlexProps>;
    Heading40962142?: PrimitiveOverrideProps<FlexProps>;
    Radio40962143?: PrimitiveOverrideProps<FlexProps>;
    Radio40962144?: PrimitiveOverrideProps<FlexProps>;
    Radio40962145?: PrimitiveOverrideProps<FlexProps>;
    Radio40962146?: PrimitiveOverrideProps<FlexProps>;
    Radio40962147?: PrimitiveOverrideProps<FlexProps>;
    Heading40962174?: PrimitiveOverrideProps<FlexProps>;
    Radio40962175?: PrimitiveOverrideProps<FlexProps>;
    Radio40962176?: PrimitiveOverrideProps<FlexProps>;
    Radio40962177?: PrimitiveOverrideProps<FlexProps>;
    Radio40962178?: PrimitiveOverrideProps<FlexProps>;
    Radio40962179?: PrimitiveOverrideProps<FlexProps>;
    Heading40962206?: PrimitiveOverrideProps<FlexProps>;
    Radio40962207?: PrimitiveOverrideProps<FlexProps>;
    Radio40962208?: PrimitiveOverrideProps<FlexProps>;
    Radio40962209?: PrimitiveOverrideProps<FlexProps>;
    Radio40962210?: PrimitiveOverrideProps<FlexProps>;
    Radio40962211?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type SurveyProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SurveyOverridesProps | undefined | null;
}>;
export default function Survey(props: SurveyProps): React.ReactElement;
