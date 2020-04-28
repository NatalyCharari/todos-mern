import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import TodoAddForm from '../components/TodoAddForm'

configure({ adapter: new Adapter() })

let wrapper

beforeEach(() => {
    wrapper = shallow(<TodoAddForm />)
})

describe('TodoAddForm component', () => {
    it('it shows the new state when the title changes', () => {
        const expectedTitle = 'My test title'
        const event = { target: { name: 'title', value: expectedTitle }}

        const titleInput = wrapper.find('input')
        titleInput.simulate('change', event)
        
        expect(wrapper.state().title).toEqual(expectedTitle)
    })
    it('it shows the new state when the value of the descriptions input changes', () => {
        const expectedDescription = 'My test description'
        const event = { target: { name: 'description', value: expectedDescription }}

        const descTextArea = wrapper.find('textarea')
        descTextArea.simulate('change', event)
        
        expect(wrapper.state().description).toEqual(expectedDescription)
    })
})