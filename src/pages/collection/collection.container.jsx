import { connect } from 'react-redux';
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/spinner/with-spinner.component';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component'


const mapStateToProps=createStructuredSelector({
    isLoading:(state)=>!selectIsCollectionLoaded(state)
})

const CollectionPageContainer=compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer;