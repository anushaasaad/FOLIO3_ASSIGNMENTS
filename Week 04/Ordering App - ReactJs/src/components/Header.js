import React from 'react';
import Content from './content.js';
export default function Header(props) {
	const {countcartItems} = props;
  return (
    <div>
			<nav class="navbar">
				<div class="max-width">
					<div class="logo">React Meals</div>
					<ul class="menu">
						<li>
							<a href="http://localhost:3000/cart">Your cart : {''}
							{countcartItems ? (
								<span>{countcartItems}</span>
							) : (
								'0'
							)

							}</a>
							</li>
					</ul>
					<div class="menu-btn">
						<i class="fas fa-bars">

						</i>
					</div>
				</div>
			</nav>
				<Content />
			</div>
  );
}
