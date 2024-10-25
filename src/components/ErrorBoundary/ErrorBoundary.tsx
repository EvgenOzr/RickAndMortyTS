import { Component, ReactNode } from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';


interface Props {
    children?: ReactNode;
}
  
interface State {
    hasError: boolean;
}

class ErrorBoundry extends Component<Props, State> {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return this.props.children
    }
}

export default ErrorBoundry;