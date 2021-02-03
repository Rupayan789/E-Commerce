import  React from "react";
import CollectionOverview from "../../components/collection-overview/collection.overview.component";
import { Route } from 'react-router-dom'
import CollectionPage from '../../pages/collection/collection.component'
import { firestore,convertCollectionsSnapShotToMap } from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import WithSpinner from '../../components/spinner/with-spinner.component'
import { updateCollections } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner=WithSpinner(CollectionOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);


class Shoppage extends React.Component{
        constructor(props){
                super(props);
                this.state={
                        loading:true
                };
        }
        

        
        unsubscribeFromSnapShot=null;
        componentDidMount(){
                const {updateCollections} =this.props;
                const collectionRef=firestore.collection('collections');
                this.unsubscribeFromSnapShot=collectionRef.onSnapshot(async snapShot=>{
                     const collectionsMap=convertCollectionsSnapShotToMap(snapShot);
                     updateCollections(collectionsMap);
                        this.setState({loading:false})
                })
                
        }
        render(){
                const {match}=this.props;
                const {loading}=this.state;
                return (<div className="shop-page">
                <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:categoryId`} render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props}/>} />
                </div>)
        }
        
        }

const mapDispatchToProps=dispatch=>({
        updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
})
export default connect(null,mapDispatchToProps)(Shoppage);