import React, { ReactElement, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
} from 'react-native';
import { GridTemplateComponent } from './styles';

interface Props {
  children: Array<ReactElement>;
  columns?: number;
  rows?: number;
}

export default function GridTemplate({
  children,
  columns,
  rows,
}: Props) {

  return (
    <SafeAreaView >
      <GridTemplateComponent
        data={children}
        renderItem={(item) => item.item}
        numColumns={columns ? columns : 1}
      />
    </SafeAreaView>
  );
};

