import list from '../experiments/list.json'

const experimentsRoutes = []

list.forEach((experiment) => {
  experimentsRoutes.push({
    path: `/scene/${experiment.alias}`,
    component: () => import(`../experiments/${experiment.alias}/Entry.vue`)
  })
})

export default experimentsRoutes
