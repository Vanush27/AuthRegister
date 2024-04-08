import React from 'react';
import {Button as RNEButton} from '@rneui/base';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useStyles, containerStyles} from './Button.useStyles';

import type {ViewStyle, GestureResponderEvent, ViewProps} from 'react-native';
import type {ButtonProps} from '@rneui/base';

function Button({
  variant = 'default',
  buttonStyle,
  titleStyle,
  type = 'solid',
  block = 'fit',
  icon,
  iconRight,
  iconPosition,
  trackingName,
  loading = false,
  disabled = false,
  onPress,
  ...props
}: IButtonProps) {
  const {styleSets, typeStyleSet, blockStyleSet, loadingColor} = useStyles();

  const withIconStyle: ViewStyle = icon
    ? {
        [iconRight || iconPosition === 'right'
          ? 'marginRight'
          : 'marginLeft']: 8,
      }
    : {};

  const handlePress = (event: GestureResponderEvent) => {
    onPress?.(event);
  };
  const ViewComponent =
    type === 'blurred'
      ? renderBlurButtonView(loading)
      : renderSimpleView(loading);

  return (
    <RNEButton
      {...props}
      disabled={disabled || loading}
      ViewComponent={ViewComponent as never}
      buttonStyle={StyleSheet.flatten([
        styleSets[variant].buttonStyle,
        typeStyleSet[type].buttonStyle,
        blockStyleSet[block].buttonStyle,
        buttonStyle,
      ])}
      disabledStyle={StyleSheet.flatten([typeStyleSet[type].disabledStyle])}
      disabledTitleStyle={StyleSheet.flatten([
        typeStyleSet[type].disabledTitleStyle,
        loading && {color: 'transparent'},
      ])}
      icon={icon}
      iconPosition={iconPosition}
      iconRight={iconRight}
      //   loadingProps={{
      //     color: loadingColor,
      //   }}
      titleStyle={StyleSheet.flatten([
        styleSets[variant].titleStyle,
        typeStyleSet[type].titleStyle,
        withIconStyle,
        titleStyle,
        loading && {color: 'transparent'},
      ])}
      onPress={handlePress}
    />
  );
}

const renderBlurButtonView = (loading: boolean) =>
  function BlurButtonView({children, ...viewProps}: ViewProps) {
    return (
      <View {...viewProps}>
        {children}
        {loading ? (
          <ActivityIndicator style={containerStyles.loading} color="black" />
        ) : null}
      </View>
    );
  };

const renderSimpleView = (loading: boolean) =>
  function SimpleView({children, ...viewProps}: ViewProps) {
    return (
      <View {...viewProps}>
        {children}
        {loading ? (
          <ActivityIndicator style={containerStyles.loading} color="black" />
        ) : null}
      </View>
    );
  };

export interface IButtonProps extends Omit<ButtonProps, 'type'> {
  variant?: 'default' | 'small' | 'medium';
  block?: 'fit' | 'inline';
  type?: ButtonProps['type'] | 'transparent' | 'blurred' | 'grey';
  /** Name of the CTA which will be sent to analytics if button pressed. */
  trackingName?: string;
}

export default Button;
