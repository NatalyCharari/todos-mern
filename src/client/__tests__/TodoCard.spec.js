import React from 'react'
import { create } from 'react-test-renderer'
import TodoCard from '../components/TodoCard'

describe('TodoCard component', () => {
    test('it shows the expected title when created', () => {
        const props = {
            todo: {
                _id: '12345',
                title: 'Card Title',
                description: 'Card Description'
            }
        }
        const component = create(<TodoCard {...props} />)
        const root = component.root

        const titleElement = root.findByType('h5')
        expect(titleElement.props.children).toBe(props.todo.title)
    })
    test('it shows the expected description when created', () => {
        const props = {
            todo: {
                _id: '12345',
                title: 'Card Title',
                description: 'Card Description'
            }
        }
        const component = create(<TodoCard {...props} />)
        const root = component.root

        const descriptionElement = root.findByType('p')
        expect(descriptionElement.props.children).toBe(props.todo.description)
    })
})