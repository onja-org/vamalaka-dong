import { Story, Meta } from '@storybook/react'
import { Description } from '../DescriptionOffer/descriptionOffer.stories'
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
  categories: [
    {
      title: 'food',
      description: 'more food',
      id: 'kjfjs',
    },
    {
      title: 'handmade',
      description: 'more bags',
      id: 'jedds',
    },
  ],
}
