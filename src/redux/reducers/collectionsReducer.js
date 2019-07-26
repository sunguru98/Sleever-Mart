import { shopData } from '../../shopData'
const collectionsInitialState = {
  collections: shopData
}

const collectionsReducer = (state = collectionsInitialState, action) => {
  switch (action.type) {
    default: return state
  }
}

export default collectionsReducer