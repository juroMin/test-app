import React from 'react';
import renderer from 'react-test-renderer';
import {Divider, Header, Text, Row, SafeAreaLayout, Overlay} from 'components';

test('Divider renders correctly', () => {
  const tree = renderer.create(<Divider />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Header renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Text renders correctly', () => {
  const tree = renderer.create(<Text />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Row renders correctly', () => {
  const tree = renderer.create(<Row />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Safe Area Layout renders correctly', () => {
  const tree = renderer.create(<SafeAreaLayout />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Overlay renders correctly', () => {
  const tree = renderer.create(<Overlay />).toJSON();
  expect(tree).toMatchSnapshot();
});
