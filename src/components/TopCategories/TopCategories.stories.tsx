import { Story, Meta } from '@storybook/react'
import TopCategories from './TopCategories'
import { TopCategoriesProps } from './TopCategories'

export default {
  title: 'Components/TopCategories',
  component: TopCategories,
} as Meta

const Categories: Story<TopCategoriesProps> = (args) => (
  <TopCategories {...args} />
)

export const categories = Categories.bind({})
categories.args = {
  title: 'Top categories',
  names: [
    'food',
    'handmade',
    'spices',
    'clothing',
    'collectibles',
    'everything',
  ],
}
