import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import CollectionOverview from '../collection-overview/collection.overview.component'
import WithSpinner from '../spinner/with-spinner.component';
import { compose } from 'redux'


const mapStateToProps=createStructuredSelector({
    isLoading:selectIsCollectionFetching
})

const CollectionOverviewContainer=compose(
    connect(mapStateToProps),
    WithSpinner)(CollectionOverview);

    export default CollectionOverviewContainer;