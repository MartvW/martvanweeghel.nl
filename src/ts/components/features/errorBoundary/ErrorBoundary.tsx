import ErrorPage from "@components/pages/errorPage/ErrorPage";
import { Component } from "react";

class ErrorBoundary extends Component {
  private readonly error: any = null;
  private readonly errorInfo: any = null;

  state = {
    hasError: false,
    error: this.error,
    errorInfo: this.errorInfo,
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      ...this.state,
      error,
      errorInfo,
    });
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <ErrorPage
        error={this.state.error?.message}
        errorInfo={this.state.errorInfo?.componentStack}
      />
    );
  }
}

export default ErrorBoundary;
