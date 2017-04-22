import React from 'react';
import '../css/section.css';
class SearchBar extends React.Component {
    onTextChange = (e) => {
        this.props.onTextChange(e.target.value.toLowerCase());
    };
    onCheckChange = (e) => {
        this.props.onCheckChange(e.target.checked)
    };

	render() {
        return (
            <form>
            <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.onTextChange}/>
                <p>
                <input type="checkbox" checked={this.props.checked} onChange={this.onCheckChange}/>
                    Only show products in stock.
                </p>
            </form>
        );
	}
}
class ProductTable extends React.Component {
	render() {
        const {products, filterText, stockOnly} = this.props;
        let rows = [];
        let lastCat = null;
        products.forEach(function(product) {
            if(product.name.toLowerCase().indexOf(filterText) === -1 || (stockOnly && !product.stocked)) return;
            if(product.category !== lastCat) {
                rows.push(<ProductCateGoryRow category={product.category}/>);
            }
            rows.push(<ProductRow product={product}/>);
            lastCat = product.category;
        });
        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {rows}
            </table>
        )
	}
}
class ProductCateGoryRow extends React.Component {
	render() {
        const {category} = this.props;
        return (
        <tr><th colspan="2">{category}</th></tr>
        )
	}
}
class ProductRow extends React.Component {
	render() {
	   const {product} = this.props;
       const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>
	   return (
	   		<tr>
	   			<td>{name}</td>
	   			<td>{product.price}</td>
	   		</tr>
	   	);
	}
}

class FilteredTable extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {filterText:'', stockOnly: false};
    }
    onTextChange = (text) => {
        this.setState({filterText: text})
    };
    onCheckChange = (checked) => {
        this.setState({stockOnly: checked});
    };

    render() {
    const {filterText, stockOnly} = this.state;
    const {products} = this.props;
        return (
            <div>
            <SearchBar 
                filterText={filterText} 
                stockOnly={stockOnly} 
                onTextChange={this.onTextChange}
                onCheckChange={this.onCheckChange}/>
                <ProductTable products={products} filterText={filterText} stockOnly={stockOnly}/>
            </div>
        );
    }
}


export default class extends React.Component {
    render() {
        let PRODUCTS = [
          {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
          {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
          {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
          {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
          {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
          {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
        ];
        return (
            <div className="container">
                <h2>Filter table</h2>
                <FilteredTable products={PRODUCTS}/>
            </div>
        )
    }
}