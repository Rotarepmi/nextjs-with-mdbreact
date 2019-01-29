import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default (WrappedComponent) => (
  class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
)