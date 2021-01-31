import React from 'react';
import MenuItem from '../menu-item/menuitem.component';
import {connect } from "react-redux"
import {createStructuredSelector} from 'reselect'
import './directory.styles.scss';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
const Directory=({sections})=>{
 return (<div className='directory-menu'>
            {sections.map(({id ,...sectionprops})=>(
            <MenuItem key={id} {...sectionprops}/>
        ))};
        </div>)
}
const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);