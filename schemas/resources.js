export default {
  name: 'resources',
  type: 'document',
  title: 'Resources',
  fields: [
    {
      name: 'resourceTitle',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'resourceDate',
      type: 'date',
      title: 'Date',
    },
    {
      name: 'resourceTitleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smalldescription',
      type: 'text',
      title: 'Small Description',
    },
  ],
}
