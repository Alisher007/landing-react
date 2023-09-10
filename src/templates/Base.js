import Footer from './Footer'
import Header from './Header'

const Base = ({children}) =>  {
	return (
	<div>
	  {children}
      <Header />
	  <Footer />
	</div>
	);
}

export default Base;


