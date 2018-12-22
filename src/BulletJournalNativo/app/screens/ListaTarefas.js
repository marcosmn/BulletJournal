import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import tarefas from '../data/tarefas';
import { ListItem } from '../components/List';
/*import { changeBaseCurrency, changeQuoteCurrency } from '../actions/tarefas';*/

class ListaTarefas extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
	/*
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
	*/
    primaryColor: PropTypes.string,
  };
/*
  handlePress = (currency) => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency));
    }
    this.props.navigation.goBack(null);
  };
*/
  render() {
    /*
	let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === 'quote') {
      comparisonCurrency = this.props.quoteCurrency;
    }
	*/
    return (
      <View>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={tarefas}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
	/*
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  */
  primaryColor: state.theme.primaryColor,
});

export default connect(mapStateToProps)(ListaTarefas);


