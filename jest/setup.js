/* eslint-disable no-undef */
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

jest.mock('../src/presentation/assets/index.js', () => jest.fn());
