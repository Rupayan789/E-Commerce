import  React from "react";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import { Route } from 'react-router-dom'
import CollectionPage from '../../pages/collection/collection.component'

import {connect} from 'react-redux'

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionPageContainer from "../collection/collection.container";




class Shoppage extends React.Component{

        
        componentDidMount(){
                const {fetchCollectionsStartAsync}=this.props;
                fetchCollectionsStartAsync();
              
        }
        render(){
                const {match}=this.props;
                return (<div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
                <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
                </div>)
        }
        
        }

const mapDispatchToProps=dispatch=>({
        fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
})

export default connect(null,mapDispatchToProps)(Shoppage);