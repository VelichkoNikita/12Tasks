import React from 'react'
import '../Task10/Task10.scss'
import Logo1 from '../../Images/1Task/12Storeez.svg'

const Task10 = (props) => {

	return (<>
		<h4>Ниже сделал 2 варианта:</h4>
		<h5>Первая картинка -  сделал через свойство filter, но нашел только похожий цвет.</h5>
		<h5>Вторая картинка - альтернативный способ через css, записал в виде inline-svg, указал цвет в fill.</h5>
		<div className="Row1">


			<img src={Logo1} />

			<svg xmlns="http://www.w3.org/1999/xlink" width="200" height="200"
				viewBox="0 0 529.4 92.7" fill="#00b19d">
				<path d="M527.9,27.6h-48.4v22.5h0.6c0-8.9,4.5-21.9,19.4-21.9H516l-37.2,61.5v0.4h50.5V66.7h-0.6c0,9.8-4.5,22.8-19.4,22.8h-19
	L527.9,28V27.6z M437.9,58.4c13.5,0,14.8,7.2,14.8,16.9h0.6V40.9h-0.6c0,9.5-1.3,16.9-13.9,16.9h-2.1V28.2h11
	c14.9,0,19.4,13,19.4,21.9h0.6V27.6h-50.3v0.6h8.9v61.4h-8.9v0.6h51.2V66.7H468c0,9.8-4.5,22.8-19.4,22.8h-11.9V58.4H437.9z
	 M376.9,58.4c13.5,0,14.9,7.2,14.9,16.9h0.6V40.9h-0.6c0,9.5-1.3,16.9-13.9,16.9h-2.1V28.2h11c14.9,0,19.4,13,19.4,21.9h0.6V27.6
	h-50.3v0.6h9v61.4h-9v0.6h51.2V66.7H407c0,9.8-4.5,22.8-19.4,22.8h-11.9V58.4H376.9z M318.2,28.2c8.9,0,12.4,6.5,12.4,15.5
	c0,8.9-3.5,15.6-12.4,15.6h-11.1v-31h11.1V28.2z M351.1,80.6h-0.5c-1.7,7.9-4.6,8.7-6,8.7c-9.6,0,2.3-28.1-22.1-29.8
	c11.9-1.1,18.4-6.7,18.4-15.8c0-10.6-8.1-16.1-22.7-16.1h-30.3v0.6h8.9v61.4h-8.9v0.6H316v-0.6h-8.9V59.7h11.8
	c17.7,0,2.7,31.7,20.5,31.7C343.9,91.3,349.2,90.4,351.1,80.6 M248.7,91.6c-16.4,0-19.9-11.9-19.9-32.5s3.5-32.5,19.9-32.5
	s19.9,11.9,19.9,32.5S265.1,91.6,248.7,91.6 M248.7,26c-17.2,0-31.1,14-31.1,33.1s13.9,33.1,31.1,33.1s31.1-14,31.1-33.1
	S265.9,26,248.7,26 M190.4,28.2c14.9,0,19.4,13,19.4,23.7h0.6V27.6h-51.5v24.3h0.6c0-10.7,4.5-23.7,19.4-23.7h0.6v61.4h-8.9v0.6
	h28.2v-0.6h-8.9V28.2H190.4z M121.1,91.9c-17.2,0-28.6-17.2-28.6-36.1h-1v34.3h15.6c4.2,1.6,8.9,2.5,14,2.5c20.5,0,30-14.2,30-28
	c0-32.3-50.7-21.1-50.7-47c0-8.4,8.2-17,19.2-17c18,0,24.8,16.2,24.8,32.3h1V0l-12.9,2.6c-3.7-1.7-7.9-2.6-13-2.6
	c-12.4,0-25.2,10.7-25.2,24.6c0,35.2,49.7,21.5,49.7,49C144.1,82.9,134.9,91.9,121.1,91.9 M53.9,36.6c0-3.2-2.8-6-6-6
	c-0.7,0-1.4,0.2-2.1,0.4c2.6-2.9,6.2-4.7,10.1-4.7c7.6,0,11,5.1,11,13.1c0,9.6-6.4,24.1-16,35.2L38.5,89.2h0.1l-0.1,0.1v0.9h41.2
	V69.4h-0.6c0,8.9-1.8,12.3-9.5,12.3H46.1l6-6.7c14-15.7,25.6-23.1,25.6-34.7c0-9.4-9.6-14.7-19.2-14.7c-6.7,0-16.4,4.2-16.4,11
	c0,3.1,2.8,5.9,5.9,5.9C51.2,42.5,53.9,39.7,53.9,36.6 M0,33.2h8.9v56.3H0v0.6h28.2v-0.6h-8.9V25.8h-0.8l-9.3,6.8H0V33.2z"/>
			</svg>
		</div>
	</>
	)
}

export default Task10