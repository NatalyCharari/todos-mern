import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { mount, configure } from 'enzyme'
import TodoEditForm from '../components/TodoEditForm'

configure({ adapter: new Adapter() })

const todo = { _id: '12345', title: 'Card Title', description: 'Card Description' }
let wrapper

beforeEach(() => {
    wrapper = mount(<TodoEditForm todo={todo} />)
})

describe('TodoEditForm component', () => {
    it('it shows the new state when the component is instantiated', () => {
        expect(wrapper.state().title).toEqual(todo.title)
    })
    it('it shows the new state when the component is instantiated', () => {
        expect(wrapper.state().description).toEqual(todo.description)
    })
    it('it shows the value of the input title when the component is instantiated', () => {
        const titleInput = wrapper.find('input')
        expect(titleInput.props().value).toEqual(todo.title)
    })
    it('it shows the value of the desc element when the component is instantiated', () => {
        const descTextArea = wrapper.find('textarea')
        expect(descTextArea.props().value).toEqual(todo.description)
    })
})