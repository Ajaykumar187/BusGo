import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // In a real production app this would report to a monitoring service
    // (Sentry, LogRocket, etc). Kept as console.error to avoid adding a
    // hard dependency on a specific provider.
    console.error("Uncaught UI error:", error, info);
  }

  handleReload = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center page-wash px-4">
          <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md text-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Something went wrong
            </h1>
            <p className="text-gray-500">
              An unexpected error occurred. Please try reloading the page.
            </p>
            <button
              onClick={this.handleReload}
              className="ember-glow bg-gradient-to-r from-ember to-ember-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Go to Homepage
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
