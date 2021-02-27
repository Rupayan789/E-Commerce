import  React, { useEffect } from "react";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import { Route } from 'react-router-dom'

import {connect} from 'react-redux'

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionPageContainer from "../collection/collection.container";




const Shoppage = ({ fetchCollectionsStart , match }) => {

        useEffect(()=>{
                fetchCollectionsStart();
        },[fetchCollectionsStart])
                return (<div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
                </div>)
        }

const mapDispatchToProps=dispatch=>({
        fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
})

export default connect(null,mapDispatchToProps)(Shoppage);