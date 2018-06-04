import React from 'react';
import {Searchbox} from './searchbox';
import {Button,Row,Input} from 'react-materialize';
import Constants from '../constants'

export const SearchForm = () => {
    return (
      <div className = "leftForm">
      <Row>
      <Searchbox/>
      <Input s={12} type='select' label="Business Type" defaultValue='1'>
      	{Constants.business_types.map(function(item, index){
        	return (<option key={index} value={index + 1}>{item}</option>)
      	})}
      </Input>
      <Input s={12} type='select' label="Monthly Rent Budget" defaultValue='1'>
      	{Constants.rental_budget_range.map(function(item, index){
        	return (<option key={index} value={index + 1}>{item}</option>)
      	})}
      </Input>
      <Input className ="radioButtons" name='group1' type='checkbox' value='true' label='In Downtown' defaultValue='checked' />
      </Row>
      <div className="searchBar"><Button waves='light' className="searchBox red" node='a' href='#'> Predict </Button></div>
      </div>
    )
}