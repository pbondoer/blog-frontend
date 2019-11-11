import { h } from 'preact';
import { shallow } from 'enzyme';

import Home from '..';

describe('Home', () => {
  it('should render', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toBeDefined();
  });
});
